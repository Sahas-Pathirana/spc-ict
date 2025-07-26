import React, { useState } from 'react';
import { Download, Eye, Calendar, MapPin, Users } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Using placeholder images from Pexels for demonstration
  const events = [
    {
      id: 1,
      title: 'Web Design Workshop 2024',
      date: 'December 15, 2024',
      location: 'Tech Hub Center',
      participants: 150,
      images: [
        'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg',
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
        'https://images.pexels.com/photos/3182764/pexels-photo-3182764.jpeg',
        'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      ]
    },
    {
      id: 2,
      title: 'Mobile Development Hackathon',
      date: 'November 20, 2024',
      location: 'Innovation Center',
      participants: 200,
      images: [
        'https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg',
        'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      ]
    },
    {
      id: 3,
      title: 'Digital Identity Summit',
      date: 'October 10, 2024',
      location: 'Convention Center',
      participants: 300,
      images: [
        'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
        'https://images.pexels.com/photos/3183089/pexels-photo-3183089.jpeg',
        'https://images.pexels.com/photos/3182779/pexels-photo-3182779.jpeg',
      ]
    },
    {
      id: 4,
      title: 'AI Integration Conference',
      date: 'September 5, 2024',
      location: 'Tech Campus',
      participants: 180,
      images: [
        'https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg',
        'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg',
        'https://images.pexels.com/photos/3183173/pexels-photo-3183173.jpeg',
        'https://images.pexels.com/photos/3182825/pexels-photo-3182825.jpeg',
      ]
    }
  ];

  const handleDownload = (imageUrl: string, eventTitle: string, index: number) => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${eventTitle.replace(/\s+/g, '_')}_photo_${index + 1}.jpg`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Event Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Relive the moments from our amazing events. Browse through our collection of photos 
            and download your favorites to keep the memories alive.
          </p>
        </div>

        {/* Events */}
        <div className="space-y-16">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Event Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{event.title}</h2>
                <div className="flex flex-col md:flex-row md:items-center gap-4 text-blue-100">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span>{event.participants} participants</span>
                  </div>
                </div>
              </div>

              {/* Photo Grid */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {event.images.map((image, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
                      <img
                        src={image}
                        alt={`${event.title} - Photo ${index + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="flex space-x-3">
                          <button
                            onClick={() => openModal(image)}
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            title="View full size"
                          >
                            <Eye className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => handleDownload(image, event.title, index)}
                            className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition-colors shadow-lg"
                            title="Download image"
                          >
                            <Download className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Download All Button */}
                <div className="mt-8 text-center">
                  <button
                    onClick={() => {
                      event.images.forEach((image, index) => {
                        setTimeout(() => handleDownload(image, event.title, index), index * 500);
                      });
                    }}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Download All Photos
                    <Download className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Next Event
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
            Don't miss out on upcoming competitions and workshops. Be part of our growing community of innovators.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View Upcoming Events
          </button>
        </div>
      </div>

      {/* Modal for full-size image view */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Full size view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;