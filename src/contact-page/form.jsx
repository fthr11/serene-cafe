import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Form = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ message: '', type: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_6evgk42', 'template_xcirk6e', form.current, 'otFO-KXoOjG2ujI4r')
            .then((result) => {
                console.log(result.text);
                setAlert({ message: 'Message sent successfully!', type: 'success' });
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setAlert({ message: 'Failed to send message. Please try again.', type: 'error' });
            })
            .finally(() => {
                // Set loading untuk pengiriman pesan
                setLoading(false);
                setTimeout(() => {
                    setAlert({ message: '', type: '' }); 
                }, 3000);
            });
    };

    return (
        <div className="w-full">
            {/* Alert mengirim pesan */}
            {alert.message && (
                <div className={`mb-4 p-4 rounded-md text-white transition-opacity duration-500
                    ${alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                    {alert.message}
                </div>
            )}

            <form className="flex flex-col gap-5" ref={form} onSubmit={sendEmail}>
                <div className="flex w-full flex-row gap-3">
                    <input
                        className="bg-gray-100 p-5 focus:outline-none focus:border-gray-800 border-1 w-[500px] border-gray-400"
                        type="text"
                        placeholder="Name"
                        name="user_name"
                        required
                    />
                    <input
                        className="bg-gray-100 p-5 focus:outline-none focus:border-gray-800 border-1 w-[500px] border-gray-400"
                        type="email"
                        placeholder="Email"
                        name="user_email"
                        required
                    />
                </div>
                <textarea
                    className="bg-gray-100 p-5 resize-y focus:outline-none focus:border-gray-800 border-1 w-full h-[150px] text-start border-gray-400"
                    placeholder="Message"
                    name="message"
                    required
                />
                <div className="flex justify-end">
                    <input
                        className="bg-[#B67136] hover:bg-[#e4cf71] font-semibold w-[100px] text-white p-1 rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        type="submit"
                        value={loading ? "Sending..." : "Send"}
                        disabled={loading}
                    />
                </div>
            </form>
        </div>
    );
};

export default Form;
