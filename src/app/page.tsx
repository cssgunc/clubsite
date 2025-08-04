import Image from "next/image";

const introText =
  "CS + Social Good is a student organization dedicated to using our technical skills to make a positive impact on our campus, in our community, and in the world. We believe that as students, we are in a unique position to leverage our time and resources to make a difference.";

const missionTitle = "Our work is threefold.";

const tenants = [
  "To complete impactful, technically challenging projects for nonprofit clients, pro bono, to lighten the heavy burden these organizations face.",
  "To provide a space for students to learn about the intersection of computer science and social good, and to connect with other students who are interested in this field.",
  "To create opportunites for professional development and industry connections for our members, with an emphasis on parters who make a positive impact in the world.",
];
export default function Home() {
  return (
    <div className="px-20 py-15 flex flex-col w-full">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center rounded-lg p-5">
          <Image src="/cssglogo2.svg" alt="Logo" width={400} height={400} />
          <div className="text-xl text-sky-300 transition-colors cursor-default bg-sky-300/10 rounded-lg p-2 mt-5">
            at the University of North Carolina at Chapel Hill 🐐
          </div>
        </div>

        {/* Independent first paragraph */}
        <div className="text-left text-lg mt-10 max-w-4xl">
          <p>{introText}</p>
        </div>

        {/* White box with mission and tenants */}
        <div className="bg-white rounded-lg p-8 mt-10 max-w-4xl text-black">
          <h3 className="text-xl font-semibold mb-6">{missionTitle}</h3>

          <div className="space-y-6">
            {tenants.map((tenant, index) => (
              <div className="flex items-start gap-4" key={index}>
                <span className="text-[#16dbbc] text-4xl font-bold min-w-fit">
                  {index + 1}
                </span>
                <p className="text-lg leading-relaxed">{tenant}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
