'use client';

interface ButtonLink {
    id: string;
    title: string;
    url: string;
}

interface ButtonHomeProps {
    buttons: ButtonLink[];
}

export default function ButtonHome({ buttons }: ButtonHomeProps) {
    return (
        <div className="flex flex-col space-y-4">
            {buttons.map((button) => (
                <a 
                    key={button.id}
                    href={button.url}
                    className="font-maison inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-neutral-600 hover:bg-neutral-700 hover:text-blue-400 transition-all duration-200 ease-in-out w-full sm:w-96 mx-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {button.title}
                </a>
            ))}
        </div>
    );
}