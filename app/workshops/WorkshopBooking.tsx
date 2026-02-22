'use client';

import { useState } from 'react';
import type { Workshop } from '@/types';
import { Button } from '@/components/ui/Button';

// Generate next 4 weeks of weekend + weekday options for demo
function getAvailableSlots(): { date: string; label: string; times: string[] }[] {
  const slots: { date: string; label: string; times: string[] }[] = [];
  const today = new Date();
  for (let i = 0; i < 28; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    const dayName = d.toLocaleDateString('en-US', { weekday: 'short' });
    const dateStr = d.toISOString().slice(0, 10);
    const isWeekend = d.getDay() === 0 || d.getDay() === 6;
    const times = isWeekend ? ['10:00 AM', '2:00 PM'] : ['6:00 PM'];
    slots.push({
      date: dateStr,
      label: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ` (${dayName})`,
      times,
    });
  }
  return slots;
}

const SLOTS = getAvailableSlots();

export function WorkshopBooking({ workshop }: { workshop: Workshop }) {
  const [step, setStep] = useState<'select' | 'form' | 'done'>('select');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleDateSelect = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    setErrors({});
    setStep('form');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: { name?: string; email?: string } = {};
    if (!name.trim()) nextErrors.name = 'Name is required';
    if (!email.trim()) nextErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = 'Enter a valid email';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStep('done');
  };

  if (step === 'done') {
    return (
      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-fluid-sm">
        <p className="font-medium">You’re booked!</p>
        <p className="mt-1">
          {workshop.title} — {selectedDate} at {selectedTime}. We sent a confirmation to {email}.
        </p>
      </div>
    );
  }

  if (step === 'form') {
    return (
      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        <div>
          <label htmlFor="workshop-name" className="block text-fluid-xs font-medium text-text mb-0.5">
            Your name
          </label>
          <input
            id="workshop-name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => { setName(e.target.value); setErrors((prev) => ({ ...prev, name: undefined })); }}
            required
            className="w-full px-3 py-2 rounded-lg border border-border text-fluid-sm focus:outline-none focus:ring-2 focus:ring-accent"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'workshop-name-error' : undefined}
          />
          {errors.name && (
            <p id="workshop-name-error" className="mt-1 text-fluid-xs text-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="workshop-email" className="block text-fluid-xs font-medium text-text mb-0.5">
            Email
          </label>
          <input
            id="workshop-email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setErrors((prev) => ({ ...prev, email: undefined })); }}
            required
            className="w-full px-3 py-2 rounded-lg border border-border text-fluid-sm focus:outline-none focus:ring-2 focus:ring-accent"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'workshop-email-error' : undefined}
          />
          {errors.email && (
            <p id="workshop-email-error" className="mt-1 text-fluid-xs text-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>
        <p className="text-text-muted text-fluid-xs">
          Spot reserved for {selectedDate} at {selectedTime}. ${workshop.price} due at the café.
        </p>
        <div className="flex gap-2">
          <Button type="submit" size="sm">
            Confirm booking
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => { setStep('select'); setSelectedDate(null); setSelectedTime(null); setErrors({}); }}
          >
            Back
          </Button>
        </div>
      </form>
    );
  }

  return (
    <div className="mt-6">
      <p className="text-fluid-xs font-medium text-text-muted mb-2">Choose a date & time</p>
      <div className="space-y-2 max-h-48 overflow-y-auto">
        {SLOTS.slice(0, 14).map((slot) => (
          <div key={slot.date} className="flex flex-wrap gap-2 items-center">
            <span className="text-fluid-sm text-text w-28 shrink-0">{slot.label}</span>
            {slot.times.map((time) => (
              <button
                key={time}
                type="button"
                onClick={() => handleDateSelect(slot.date, time)}
                className="px-3 py-1.5 rounded-lg border border-border text-fluid-xs hover:bg-surface-alt hover:border-brand"
              >
                {time}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
