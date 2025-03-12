import { Invitation } from "@/components/invitation"
import { ContactCards } from "@/components/contact-cards"

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ilustrasi-ramadhan_169-YvwFZGQAxfG3ckOvBVLw0maEW6xS3H.jpeg")',
        }}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[0.5px]" />
      <div className="relative z-10 w-full">
        <Invitation />
        <ContactCards />
      </div>
    </main>
  )
}

