import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
                    <p className="text-gray-600 text-lg">We'd love to hear from you!</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-rose-100 p-3 rounded-full">
                                <MapPin className="w-6 h-6 text-rose-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Address</h3>
                                <p className="text-gray-600">123 Baker Street, Sweet Town, ST 12345</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-rose-100 p-3 rounded-full">
                                <Phone className="w-6 h-6 text-rose-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Phone</h3>
                                <p className="text-gray-600">+1 (555) 123-4567</p>
                                <p className="text-gray-600">WhatsApp: +1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-rose-100 p-3 rounded-full">
                                <Mail className="w-6 h-6 text-rose-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Email</h3>
                                <p className="text-gray-600">hello@sweetcrustbakery.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-rose-100 p-3 rounded-full">
                                <Clock className="w-6 h-6 text-rose-500" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Opening Hours</h3>
                                <p className="text-gray-600">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                                <p className="text-gray-600">Sunday: 9:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-rose-50 p-8 rounded-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-200 outline-none transition resize-none"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition font-semibold shadow-md"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
