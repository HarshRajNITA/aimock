// export default function ServicesPage() {
//   return (
//     <div className="max-w-3xl mx-auto py-16 px-4">
//       <h1 className="text-3xl font-bold mb-4">Services</h1>
//       <p className="text-gray-600 leading-relaxed">
//         We provide AI-powered mock interviews, performance evaluation, and personalized feedback.
//       </p>
//       <ul className="mt-4 list-disc pl-6 text-gray-700">
//         <li>Technical Interview Practice</li>
//         <li>Behavioral Interview Practice</li>
//         <li>AI Based Performance Feedback</li>
//       </ul>
//     </div>
//   );
// }
export default function ServicesPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>

      <p className="text-gray-700 leading-relaxed text-lg mb-6">
        We offer a complete AI-powered interview preparation experience designed to help students,
        job-seekers, and working professionals improve their confidence and performance in both
        online and offline interviews. Our platform simulates real interview scenarios so you can
        practice anytime, anywhere — no human interviewer required.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">What We Provide</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-3">
        <li>
          <span className="font-semibold">AI-Generated Technical Interviews</span> – The system
          automatically generates technical questions based on your selected role or skillset like
          Web Development, Data Structures, React, Node.js, DBMS and more.
        </li>

        <li>
          <span className="font-semibold">Behavioral & HR Interview Practice</span> – Practice
          real-world HR and communication questions to improve your confidence and speaking ability.
        </li>

        <li>
          <span className="font-semibold">Live Mock Interview Flow</span> – The AI asks questions,
          listens to your answers, and responds just like a real interviewer — making practice
          feel natural and interactive.
        </li>

        <li>
          <span className="font-semibold">Smart Performance Analysis</span> – After the interview,
          you get a detailed performance breakdown showing your strengths and areas to improve.
        </li>

        <li>
          <span className="font-semibold">Personalized Feedback and Tips</span> – The AI suggests
          how to improve your answers, speaking clarity, confidence, and technical explanation style.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-3">Why Use AI Mock Interview?</h2>
      <p className="text-gray-700 leading-relaxed">
        Interviews can be stressful — especially when you don’t have someone to practice with.
        Our platform acts like a friendly interview partner that’s always available. The more
        you practice, the more confident and well-prepared you become. With real-time feedback,
        structured improvement, and continuous learning, you’ll never face an interview unprepared
        again.
      </p>

      <p className="text-gray-800 font-medium mt-8 text-lg">
        Practice. Improve. Get confident. Succeed. 🚀
      </p>
    </div>
  );
}
