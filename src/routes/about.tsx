// export default function AboutPage() {
//   return (
//     <div className="max-w-3xl mx-auto py-16 px-4">
//       <h1 className="text-3xl font-bold mb-4">About</h1>
//       <p className="text-gray-600 leading-relaxed">
//         Welcome to our AI Mock Interview platform. Our aim is to help students and professionals
//         practice real interview environments using AI-driven questions and feedback.
//       </p>
//     </div>
//   );
// }
export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        Welcome to <span className="font-semibold">AI Mock Interview</span> — your personal
        interview preparation companion. We understand that facing interviews can be stressful,
        especially when you don’t have the right environment to practice. That’s why we built
        a platform where you can improve your confidence, communication skills, and problem-solving
        ability through AI-powered interview simulations.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">What We Do</h2>
      <p className="text-gray-700 leading-relaxed">
        Our platform generates real interview-like questions using Artificial Intelligence and
        guides you through a natural and interactive mock interview session. We support both
        freshers and experienced candidates preparing for job interviews in Software Engineering,
        Web Development, Data Science, and many other fields.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">How It Helps You</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Practicing interviews anytime, anywhere — no scheduling needed.</li>
        <li>Improves communication and builds real confidence.</li>
        <li>AI provides constructive feedback on your responses.</li>
        <li>Learn how to structure answers like a professional candidate.</li>
        <li>Track your progress and identify areas to improve.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Our Mission</h2>
      <p className="text-gray-700 leading-relaxed">
        We aim to make interview preparation accessible to everyone. Whether you are a student
        trying to crack your first placement interview or a working professional preparing for
        your next career move — AI Mock Interview is here to help you grow, learn, and succeed.
      </p>

      <h2 className="text-xl font-semibold mt-10">Thank You for Choosing Us 🤝</h2>
      <p className="text-gray-700 leading-relaxed mt-2">
        Together, let’s make your interview journey smoother, more confident, and successful.
      </p>
    </div>
  );
}
