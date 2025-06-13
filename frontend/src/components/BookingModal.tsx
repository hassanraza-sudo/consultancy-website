import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X, Calendar, Clock } from 'lucide-react';
import { format, addDays } from 'date-fns';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  consultationType: 'free' | 'premium' | 'vip';
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, consultationType }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    studyDestination: '',
    message: '',
  });

  const availableDates = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i + 1));
  
  const availableTimes = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time for your consultation');
      return;
    }

    // Here you would typically send this data to your backend
    console.log({
      ...formData,
      consultationType,
      appointmentDate: selectedDate,
      appointmentTime: selectedTime,
    });
    
    // Show success message
    alert('Booking submitted successfully! We will contact you shortly to confirm your appointment.');
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-4xl bg-white rounded-xl shadow-lg">
            <div className="flex justify-between items-center p-6 border-b">
              <Dialog.Title className="text-2xl font-semibold text-gray-900">
                Book {consultationType.charAt(0).toUpperCase() + consultationType.slice(1)} Consultation
              </Dialog.Title>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-blue focus:outline-none focus:ring-1 focus:ring-sky-blue"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-blue focus:outline-none focus:ring-1 focus:ring-sky-blue"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-blue focus:outline-none focus:ring-1 focus:ring-sky-blue"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="studyDestination" className="block text-sm font-medium text-gray-700">Preferred Study Destination *</label>
                    <select
                      name="studyDestination"
                      id="studyDestination"
                      required
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-blue focus:outline-none focus:ring-1 focus:ring-sky-blue"
                      value={formData.studyDestination}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a destination</option>
                      <option value="germany">Germany</option>
                      <option value="austria">Austria</option>
                      <option value="switzerland">Switzerland</option>
                      <option value="netherlands">Netherlands</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Date Selection */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-900">Select Date & Time *</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline-block w-4 h-4 mr-2" />
                      Available Dates
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {availableDates.map((date) => (
                        <button
                          key={date.toISOString()}
                          type="button"
                          className={`p-2 text-sm rounded-md border ${
                            selectedDate.toDateString() === date.toDateString()
                              ? 'bg-sky-blue text-white border-sky-blue'
                              : 'border-gray-300 hover:border-sky-blue'
                          }`}
                          onClick={() => setSelectedDate(date)}
                        >
                          {format(date, 'MMM d')}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="inline-block w-4 h-4 mr-2" />
                      Available Times
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          type="button"
                          className={`p-2 text-sm rounded-md border ${
                            selectedTime === time
                              ? 'bg-sky-blue text-white border-sky-blue'
                              : 'border-gray-300 hover:border-sky-blue'
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={3}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-sky-blue focus:outline-none focus:ring-1 focus:ring-sky-blue"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your study goals and any specific questions you have..."
                />
              </div>

              {/* Required Fields Note */}
              <p className="text-sm text-gray-500">* Required fields</p>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-sky-blue text-white rounded-md hover:bg-sky-700 font-medium"
                >
                  Submit Booking Request
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default BookingModal;