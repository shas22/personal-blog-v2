'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { fetchFlickr } from '@/utils/api';

interface Photo {
  $: {
    id: string;
    secret: string;
    server: string;
    farm: string;
    title: string;
  };
}

interface FlickrResponse {
  rsp: {
    photoset: [{
      photo: Array<Photo>
    }]
  }
}

const PhotographyPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const loadPhotos = useCallback(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const endpoint = `services/rest/?method=flickr.photosets.getPhotos&api_key=${process.env.NEXT_PUBLIC_FLICKR_API_KEY}&user_id=${process.env.NEXT_PUBLIC_FLICKR_USER_ID}&photoset_id=${process.env.NEXT_PUBLIC_PHOTOSET_ID}`;
      const data = await fetchFlickr(endpoint);

      if (typeof data === 'object' && data !== null && 'rsp' in data) {
        const flickrData = data as FlickrResponse;
        const photoset = flickrData.rsp.photoset[0];
        setPhotos(photoset.photo);
      } else {
        console.error('Unexpected data structure:', data);
      }
    } catch (error) {
      console.error('Error fetching photos:', error);
    } finally {
      setLoading(false);
    }
  },[loading]);

  useEffect(() => {
    loadPhotos();
  }, []);

  useEffect(() => {
    if (imagesLoaded === photos.length && photos.length > 0) {
      setLoading(false);
    }
  }, [imagesLoaded, photos.length]);

  const getPhotoUrl = (photo: Photo) => {
    return `https://farm${photo.$.farm}.staticflickr.com/${photo.$.server}/${photo.$.id}_${photo.$.secret}.jpg`;
  };

  const handleImageLoad = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const handleCloseModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200">My Photography</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <div 
            key={photo.$.id} 
            className="aspect-w-1 aspect-h-1 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handlePhotoClick(photo)}
          >
            <Image
              src={getPhotoUrl(photo)}
              alt={photo.$.title}
              className="w-full h-full object-cover transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-90"
              onLoad={(e) => {
                (e.target as HTMLImageElement).classList.remove('opacity-0');
                handleImageLoad();
              }}
              fill
            />
            <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-semibold truncate">{photo.$.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal/Popup */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div className="relative w-full max-w-5xl mx-auto">
            <button
              className="absolute -top-10 right-0 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 z-50"
              onClick={handleCloseModal}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <Image
                src={getPhotoUrl(selectedPhoto)}
                alt={selectedPhoto.$.title}
                className="rounded-lg"
                fill
                style={{
                  objectFit: 'contain'
                }}
                onClick={(e) => e.stopPropagation()}
                priority
              />
            </div>
            <p className="text-white text-center mt-4">{selectedPhoto.$.title}</p>
          </div>
        </div>
      )}

      {loading && (
        <div className="h-20 mt-8 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"></div>
        </div>
      )}
    </div>
  );
};

export default PhotographyPage;