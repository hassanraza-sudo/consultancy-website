import React, { useState } from 'react';
import BookingModal from './BookingModal';

interface BookConsultationProps {
  consultationType?: 'free' | 'premium' | 'vip';
  className?: string;
}

const BookConsultation: React.FC<BookConsultationProps> = ({ 
  consultationType = 'free',
  className = 'bg-sky-blue text-white px-4 py-2 rounded-md hover:bg-sky-700'
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={className}
      >
        Book Consultation
      </button>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        consultationType={consultationType}
      />
    </>
  );
};

export default BookConsultation;