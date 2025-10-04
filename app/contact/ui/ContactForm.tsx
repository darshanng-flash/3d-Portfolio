'use client'

import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

type FormValues = { name: string; email: string; message: string }

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>()
  const [status, setStatus] = useState<string>('')

  const onSubmit = async (data: FormValues) => {
    setStatus('')
    try {
      await emailjs.send('service_xxx', 'template_xxx', data, { publicKey: 'public_xxx' })
      setStatus('Message sent successfully!')
      reset()
    } catch {
      setStatus('Failed to send. Please try again later.')
    }
  }

  return (
    <div className="card-sheen rounded-2xl border border-gray-800 bg-gray-900 p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">Name</label>
          <input
            className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 outline-none focus:border-purple transition-colors"
            {...register('name', { required: 'Name is required' })}
            placeholder="Enter your name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">Email</label>
          <input
            type="email"
            className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 outline-none focus:border-purple transition-colors"
            {...register('email', { required: 'Email is required' })}
            placeholder="name@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">Message</label>
          <textarea
            rows={5}
            className="w-full rounded-lg border border-gray-700 bg-black px-4 py-3 outline-none focus:border-purple transition-colors resize-none"
            {...register('message', { required: 'Message is required' })}
            placeholder="Write your message here..."
          />
          {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-purple px-6 py-3 font-semibold text-black hover:opacity-90 disabled:opacity-60 transition-opacity"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {status && <p className="text-center text-sm text-gray-300">{status}</p>}
      </form>
      
      <p className="mt-6 text-center text-sm text-gray-400">
        Replace EmailJS service IDs in ContactForm.tsx to enable email functionality
      </p>
    </div>
  )
}
