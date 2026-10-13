import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, MessageSquare, CheckCircle, AlertCircle, Sparkles, Send } from 'lucide-react';
import { ReservationFormData } from '../types';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '18:00',
    guests: 2,
    seatingPreference: 'indoor-cozy',
    specialRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!formData.date) {
      setErrorMessage('Please select a reservation date.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate booking submission response
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
    }, 700);
  };

  // Pre-formatted WhatsApp link with booking request
  const whatsappBookingUrl = `https://wa.me/918584857079?text=${encodeURIComponent(
    `Hello Cafe Lavassa! I would like to reserve a table:\n• Name: ${formData.name || 'Guest'}\n• Date: ${formData.date}\n• Time: ${formData.time}\n• Guests: ${formData.guests}\n• Seating: ${formData.seatingPreference}\n• Notes: ${formData.specialRequests || 'None'}`
  )}`;

  return (
    <section id="reservation" className="py-20 sm:py-32 bg-lavassa-cream/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Text & Booking Information */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-lavassa-ivory border border-lavassa-cream-dark text-lavassa-forest text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium mb-3 sm:mb-4 shadow-sm">
              <Calendar className="w-3.5 h-3.5 text-lavassa-amber" />
              <span>Table Reservations</span>
            </div>

            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-serif font-bold text-lavassa-forest-dark tracking-tight mb-3 sm:mb-5 leading-tight">
              Your Table Is Waiting.
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-lavassa-coffee/85 font-cormorant italic mb-4 sm:mb-6 leading-relaxed">
              “Planning a coffee date, a relaxed meal, or a catch-up with friends? Get in touch with us.”
            </p>

            <p className="text-xs sm:text-sm text-lavassa-coffee/80 font-sans leading-relaxed mb-6 sm:mb-8">
              Whether you wish to sit near our warm rattan light installation, cozy up by our plant-lined corner, or celebrate a birthday with our signature San Sebastián Basque cheesecake, we would love to host you.
            </p>

            {/* Direct Contact Cards */}
            <div className="w-full space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-lavassa-cream-dark/60 font-sans">
              <a
                href="tel:+918584857079"
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-lavassa-ivory border border-lavassa-cream-dark shadow-soft hover:shadow-warm transition-all group min-h-[52px]"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-lavassa-forest text-lavassa-amber flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-lavassa-sage font-bold block">
                    Immediate Telephone Booking
                  </span>
                  <span className="text-sm sm:text-base font-serif font-bold text-lavassa-coffee block">
                    +91 85848 57079
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-lavassa-caramel">Tap to call directly</span>
                </div>
              </a>

              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-all group min-h-[52px]"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-green-800 font-bold block">
                    WhatsApp Reservation Desk
                  </span>
                  <span className="text-sm font-semibold text-lavassa-forest block">
                    Chat with Cafe Lavassa
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-green-700">Quick confirmation via WhatsApp</span>
                </div>
              </a>
            </div>

            {/* Opening Times Reminder */}
            <div className="mt-6 sm:mt-8 text-xs text-lavassa-sage font-sans flex items-center gap-2">
              <Clock className="w-4 h-4 text-lavassa-amber flex-shrink-0" />
              <span>Dine-in hours: 10:00 AM – 10:30 PM (Daily)</span>
            </div>
          </div>

          {/* Right Column: Reservation Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-lavassa-ivory rounded-2xl sm:rounded-3xl p-5 xs:p-6 sm:p-10 shadow-warm border border-lavassa-cream-dark">
              
              {submittedSuccess ? (
                <div className="py-6 sm:py-8 text-center flex flex-col items-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mb-4 sm:mb-5 animate-bounce">
                    <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-lavassa-forest-dark mb-2">
                    Table Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-lavassa-coffee/85 font-sans max-w-md mb-6 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. We have noted your request for <strong>{formData.guests} guests</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
                  </p>

                  <div className="bg-lavassa-cream/60 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl w-full max-w-md text-left text-xs font-sans space-y-2 mb-6 border border-lavassa-cream-dark">
                    <div className="flex justify-between">
                      <span className="text-lavassa-sage">Seating Area:</span>
                      <span className="font-semibold text-lavassa-coffee capitalize">{formData.seatingPreference.replace('-', ' ')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-lavassa-sage">Mobile Contact:</span>
                      <span className="font-semibold text-lavassa-coffee">{formData.phone}</span>
                    </div>
                    {formData.specialRequests && (
                      <div className="flex justify-between">
                        <span className="text-lavassa-sage">Notes:</span>
                        <span className="font-semibold text-lavassa-coffee">{formData.specialRequests}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-[11px] text-lavassa-sage font-sans max-w-sm mb-6">
                    Our team will call you to confirm your table. For instantaneous priority booking, send details directly to our WhatsApp desk.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                    <a
                      href={whatsappBookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white py-3.5 rounded-full text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 transition-transform hover:scale-105 min-h-[48px]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Send to WhatsApp Desk
                    </a>
                    <button
                      onClick={() => {
                        setSubmittedSuccess(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          date: new Date().toISOString().split('T')[0],
                          time: '18:00',
                          guests: 2,
                          seatingPreference: 'indoor-cozy',
                          specialRequests: '',
                        });
                      }}
                      className="px-6 py-3.5 rounded-full bg-lavassa-cream text-lavassa-coffee hover:bg-lavassa-cream-dark text-xs uppercase font-bold tracking-wider min-h-[48px]"
                    >
                      New Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  
                  <div className="border-b border-lavassa-cream-dark pb-3 sm:pb-4 mb-2">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-lavassa-forest-dark">
                      Book a Cozy Table
                    </h3>
                    <p className="text-xs text-lavassa-sage font-sans mt-0.5">
                      Please enter your details below. We look forward to welcoming you!
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-lavassa-coffee uppercase tracking-wider mb-1 font-sans">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Priyanshu Roy"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-lavassa-cream/40 border border-lavassa-cream-dark rounded-xl px-4 py-2.5 text-base sm:text-sm text-lavassa-coffee focus:outline-none focus:border-lavassa-forest focus:ring-1 focus:ring-lavassa-forest min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-lavassa-coffee uppercase tracking-wider mb-1 font-sans">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-lavassa-cream/40 border border-lavassa-cream-dark rounded-xl px-4 py-2.5 text-base sm:text-sm text-lavassa-coffee focus:outline-none focus:border-lavassa-forest focus:ring-1 focus:ring-lavassa-forest min-h-[44px]"
                      />
                    </div>
                  </div>

                  {/* Date, Time & Number of Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-lavassa-coffee uppercase tracking-wider mb-1 font-sans">
                        Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-lavassa-cream/40 border border-lavassa-cream-dark rounded-xl px-4 py-2.5 text-base sm:text-sm text-lavassa-coffee focus:outline-none focus:border-lavassa-forest focus:ring-1 focus:ring-lavassa-forest min-h-[44px]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-lavassa-coffee uppercase tracking-wider mb-1 font-sans">
                        Time Slot <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-lavassa-cream/40 border border-lavassa-cream-dark rounded-xl px-4 py-2.5 text-base sm:text-sm text-lavassa-coffee focus:outline-none focus:border-lavassa-forest focus:ring-1 focus:ring-lavassa-forest min-h-[44px]"
                      >
                        <option value="10:30">10:30 AM (Morning Brew)</option>
                        <option value="12:00">12:00 PM (Lunch)</option>
                        <option value="14:00">02:00 PM (Afternoon)</option>
                        <option value="16:00">04:00 PM (High Tea & Bakes)</option>
                        <option value="18:00">06:00 PM (Evening Glow)</option>
                        <option value="19:30">07:30 PM (Dinner & Coffee)</option>
                        <option value="21:00">09:00 PM (Late Dinner)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] sm:text-xs font-semibold text-lavassa-coffee uppercase tracking-wider mb-1 font-sans">
                        Guests
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full bg-lavassa-cream/40 border border-lavassa-cream-dark rounded-xl px-4 py-2.5 text-base sm:text-sm text-lavassa-coffee focus:outline-none focus:border-lavassa-forest focus:ring-1 focus:ring-lavassa-forest min-h-[44px]"
                      >
                        <option value={1}>1 Person (Solo Escape)</option>
                        <option value={2}>2 People (Date / Duo)</option>
                        <option value={3}>3 People</option>
                        <option value={4}>4 People</option>
                        <option value={5}>5 People</option>
                        <option value={6}>6+ People (Group)</option>
                      </select>
                    </div>
                  </div>

                  {/* Seating Preference */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-lavassa-coffee uppercase tracking-wider mb-1.5 font-sans">
                      Seating Preference
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                      {[
                        { id: 'indoor-cozy', label: 'Rattan Corner' },
                        { id: 'botanical-corner', label: 'Botanical Plants' },
                        { id: 'window-seat', label: 'Window View' },
                        { id: 'no-preference', label: 'Any Cozy Spot' },
                      ].map((seat) => (
                        <button
                          key={seat.id}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, seatingPreference: seat.id as any }))}
                          className={`p-2 sm:p-2.5 rounded-xl text-[11px] sm:text-xs font-medium text-center border transition-all min-h-[42px] ${
                            formData.seatingPreference === seat.id
                              ? 'bg-lavassa-forest text-lavassa-ivory border-lavassa-forest shadow-sm'
                              : 'bg-lavassa-cream/30 text-lavassa-coffee border-lavassa-cream-dark hover:bg-lavassa-cream/70'
                          }`}
                        >
                          {seat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-[11px] sm:text-xs font-semibold text-lavassa-coffee uppercase tracking-wider mb-1 font-sans">
                      Special Note / Occasion (Optional)
                    </label>
                    <textarea
                      name="specialRequests"
                      rows={2}
                      placeholder="e.g. Birthday celebration, anniversary, high-chair needed, quiet table for work..."
                      value={formData.specialRequests}
                      onChange={handleChange}
                      className="w-full bg-lavassa-cream/40 border border-lavassa-cream-dark rounded-xl px-4 py-2 text-base sm:text-sm text-lavassa-coffee focus:outline-none focus:border-lavassa-forest focus:ring-1 focus:ring-lavassa-forest"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-lavassa-forest hover:bg-lavassa-forest-dark text-lavassa-ivory py-3.5 sm:py-4 rounded-full text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold shadow-warm transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 border border-lavassa-amber/40 disabled:opacity-70 min-h-[48px]"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-lavassa-amber" />
                        <span>Request a Table</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] sm:text-[11px] text-lavassa-sage text-center font-sans">
                    *For instant confirmation within minutes, you can also ring us directly at{' '}
                    <a href="tel:+918584857079" className="text-lavassa-caramel font-semibold underline">
                      +91 85848 57079
                    </a>.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
