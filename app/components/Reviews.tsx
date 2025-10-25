import Image from "next/image";

interface Review {
  username: string;
  text: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    username: "@parth12",
    text: "I learned so much about the tech industry and how to build a strong portfolio.",
    avatar: "https://framerusercontent.com/images/RUirKK91LWPspOx0a9MaMDBHAE.png",
  },
  {
    username: "@sakshi_meh",
    text: "Loved the workshop, Gained so much insights. The instructors were amazing and the content was very relevant.",
    avatar: "https://framerusercontent.com/images/cDGsNi3CtJL6PuD4pukFafdnQ.png",
  },
  {
    username: "@trivedi23",
    text: "I was able to secure my first job in tech thanks to the guidance and support from this workshop.",
    avatar: "https://framerusercontent.com/images/8V4jQfuOGa3QKoShg6X8HIBIt94.png",
  },
  {
    username: "@sudipta",
    text: "The hands-on approach and practical insights provided by the instructors helped me land my first tech job within months.",
    avatar: "https://framerusercontent.com/images/PMzZ9fdn4k64Q7yqyedelVL0dk.png",
  },
  {
    username: "@divya_jain",
    text: "The workshop was a turning point in my career. I highly recommend it for anyone looking to get into tech.",
    avatar: "https://framerusercontent.com/images/bWxvDlv7cLWM9LCzSgoKzg5QlTo.webp",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-12 bg-white" id="review">
      <div className="text-center mb-10">
        <p className="text-orange-600 font-semibold">Reviews</p>
        <h2 className="text-3xl font-bold mt-2">Success stories</h2>
        <p className="text-gray-800 mt-1">What our students say about us.</p>
      </div>

      <div className="flex overflow-x-auto gap-6 px-4">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-72 bg-white border border-dashed border-gray-200 rounded-2xl p-5 shadow-sm"
          >
            <div className="w-24 h-24 mb-4 relative rounded-full overflow-hidden mx-auto">
              <Image src={review.avatar} alt={review.username} fill className="object-cover" />
            </div>
            <p className="text-gray-900 font-semibold text-center">{review.username}</p>
            <p className="text-gray-700 mt-2 text-center">{review.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <div className="bg-gray-900 text-white rounded-2xl p-8 text-center max-w-lg">
          <h3 className="text-xl font-bold mb-4">
            Having a career-related query? We're here to answer.
          </h3>
          <a
            href="https://pages.razorpay.com/coding-shuttle-webinar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold shadow-md hover:shadow-lg"
          >
            Book your Seat
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="w-5 h-5 fill-current"
            >
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
            </svg>
          </a>
          <p className="mt-4 font-semibold">10,000x Returns Guaranteed</p>
        </div>
      </div>
    </section>
  );
}
