import ContactForm from './ContactForm'

export const metadata = { title: 'Contact | DARSHAN N G' }

export default function ContactPage() {
  return (
    <section className="relative z-[3000] mx-auto max-w-2xl px-6 pt-28 md:pt-32">
      <h1
        className="mb-10 text-center text-[9vw] sm:text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent"
        style={{
          backgroundImage:
            'linear-gradient(90deg, #e9d5ff 0%, #c084fc 30%, #22d3ee 65%, #a5b4fc 100%)',
          filter: 'drop-shadow(0 6px 24px rgba(147,51,234,.25))',
        }}
      >
        Get In Touch
      </h1>

      <ContactForm />
    </section>
  )
}
