import { Atom, GravitationalDistortion } from "@/components/Animations";
import { ProjectInfo } from "@/components/DevProjects";

const data = {
  key: ["type", "core", "style", "host"],
  value: ["Frontend application", "React, Three.js", "SCSS", "Netlify"],
};

export const OldPortfolio = () => {
  return (
    <section className="mt-8 flex justify-between">
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl font-bold uppercase text-accent-500">
          Old Portfolio
        </h2>
        <div className="relative flex gap-5">
          <div className="border border-primary-500 bg-background">
            <Atom />
          </div>
          <div className="flex flex-col gap-5 ">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_133_3143)">
                <path
                  d="M14.468 47.328H20.36V48.084H14.468V47.328ZM14.54 43.14H20.324V43.872H14.54V43.14ZM16.7 46.296L17.54 46.476C17 47.652 16.244 49.116 15.692 50.064L14.9 49.788C15.44 48.876 16.196 47.4 16.7 46.296ZM18.5 47.772L19.34 47.88C18.932 50.22 17.672 51.372 14.9 51.96C14.84 51.72 14.66 51.396 14.492 51.216C17 50.796 18.128 49.812 18.5 47.772ZM19.256 41.16L20.024 41.496C19.676 42.048 19.28 42.648 18.944 43.056L18.344 42.756C18.644 42.324 19.04 41.628 19.256 41.16ZM17.024 40.92H17.852V46.44H17.024V40.92ZM14.984 41.496L15.668 41.208C16.004 41.688 16.328 42.324 16.448 42.756L15.74 43.08C15.632 42.648 15.32 41.988 14.984 41.496ZM17.036 43.464L17.648 43.824C17.06 44.832 15.932 45.9 14.9 46.464C14.792 46.26 14.576 45.96 14.408 45.78C15.404 45.348 16.508 44.388 17.036 43.464ZM17.756 43.884C18.188 44.112 19.652 45.036 20 45.288L19.508 45.948C19.076 45.54 17.828 44.604 17.324 44.268L17.756 43.884ZM21.236 43.14H25.508V43.98H21.236V43.14ZM21.536 40.92L22.448 41.052C22.052 43.404 21.344 45.552 20.288 46.956C20.144 46.788 19.772 46.488 19.556 46.344C20.576 45.072 21.2 43.044 21.536 40.92ZM23.9 43.62L24.812 43.716C24.236 47.856 22.964 50.436 19.94 51.996C19.844 51.78 19.58 51.384 19.4 51.192C22.256 49.848 23.408 47.424 23.9 43.62ZM21.716 43.884C22.244 47.184 23.396 50.016 25.628 51.192C25.412 51.372 25.124 51.72 24.992 51.96C22.64 50.58 21.5 47.652 20.9 44.016L21.716 43.884ZM15.62 49.62L16.1 49.008C17.54 49.56 19.028 50.352 19.892 51.012L19.268 51.66C18.44 50.988 17.012 50.184 15.62 49.62ZM36.404 46.188H37.268C37.268 46.188 37.256 46.464 37.244 46.596C36.968 49.836 36.704 51.084 36.272 51.528C36.044 51.78 35.804 51.876 35.444 51.888C35.144 51.912 34.592 51.912 34.004 51.888C33.992 51.636 33.896 51.288 33.764 51.048C34.34 51.12 34.868 51.12 35.096 51.12C35.3 51.12 35.432 51.096 35.54 50.976C35.888 50.652 36.164 49.428 36.404 46.344V46.188ZM31.316 41.628H35.768V42.456H31.316V41.628ZM31.892 43.212L32.732 43.26C32.636 44.46 32.468 46.032 32.336 46.968H31.484C31.64 45.996 31.808 44.388 31.892 43.212ZM31.736 46.188H36.668V46.968H31.736V46.188ZM30.908 48.552H35.504V49.356H30.908V48.552ZM35.396 41.628H35.492L35.636 41.592L36.26 41.664C36.152 43.08 35.924 45.192 35.708 46.764L34.856 46.704C35.072 45.132 35.312 42.864 35.396 41.736V41.628ZM26.6 41.568H30.728V42.396H26.6V41.568ZM27.776 45.264H30.38V50.448H27.776V49.644H29.588V46.068H27.776V45.264ZM28.148 41.964L28.988 42.144C28.556 44.412 27.86 46.596 26.756 48.036C26.696 47.82 26.492 47.304 26.336 47.064C27.26 45.84 27.824 43.968 28.148 41.964ZM27.38 45.264H28.172V51.42H27.38V45.264ZM41.72 42.288H49.232V43.116H41.72V42.288ZM41.216 44.508H49.568V45.336H41.216V44.508ZM43.34 40.944H44.216V45.12H43.34V40.944ZM46.544 40.944H47.432V45.156H46.544V40.944ZM43.52 45L44.288 45.276C43.712 46.584 42.668 47.904 41.648 48.6C41.504 48.396 41.216 48.084 41.024 47.928C41.984 47.328 43.004 46.152 43.52 45ZM47.264 44.964C47.756 46.104 48.74 47.232 49.76 47.772C49.556 47.94 49.268 48.264 49.124 48.492C48.068 47.82 47.06 46.524 46.52 45.228L47.264 44.964ZM43.268 48.576H46.58V47.292H43.412V46.548H47.408V49.32H43.268V48.576ZM42.86 48.576H43.712V50.736C43.712 51.06 43.844 51.132 44.612 51.132C44.96 51.132 46.772 51.132 47.252 51.132C47.888 51.132 47.984 50.964 48.044 49.776C48.248 49.92 48.608 50.04 48.848 50.088C48.716 51.6 48.452 51.936 47.312 51.936C47.024 51.936 44.852 51.936 44.576 51.936C43.244 51.936 42.86 51.708 42.86 50.748V48.576ZM39.02 41.688L39.536 41.028C40.268 41.352 41.156 41.892 41.588 42.312L41.06 43.044C40.64 42.612 39.752 42.036 39.02 41.688ZM38.408 44.928L38.912 44.244C39.644 44.544 40.544 45.048 40.988 45.444L40.472 46.188C40.052 45.78 39.152 45.252 38.408 44.928ZM38.732 51.252C39.308 50.328 40.1 48.756 40.688 47.388L41.396 47.928C40.856 49.2 40.148 50.688 39.536 51.804L38.732 51.252Z"
                  fill="#EF3939"
                />
                <circle cx="16" cy="16" r="5.5" stroke="#EF3939" />
                <circle cx="16" cy="32" r="5.5" stroke="#EF3939" />
                <circle cx="32" cy="32" r="5.5" stroke="#EF3939" />
                <circle cx="48" cy="32" r="5.5" stroke="#EF3939" />
                <circle cx="48" cy="16" r="5.5" stroke="#EF3939" />
                <circle cx="32" cy="16" r="5.5" stroke="#EF3939" />
                <circle cx="16" cy="16" r="4" fill="#EF3939" />
                <circle cx="32" cy="32" r="4" fill="#EF3939" />
                <circle cx="48" cy="32" r="4" fill="#EF3939" />
              </g>
              <rect
                x="1.5"
                y="1.5"
                width="61"
                height="61"
                stroke="#EF3939"
                strokeWidth="3"
              />
              <defs>
                <clipPath id="clip0_133_3143">
                  <rect
                    width="44"
                    height="44"
                    fill="white"
                    transform="translate(10 10)"
                  />
                </clipPath>
              </defs>
            </svg>
            <div className="z-10 flex flex-col">
              <div className="flex justify-center border border-primary-500 bg-secondary-500 px-6 py-3">
                <h2 className="text-3xl font-medium uppercase">Stack</h2>
              </div>
              <div className="flex gap-4 border-x border-b border-primary-500 bg-background px-6 py-3 uppercase">
                <div className="flex flex-col">
                  {data.key.map((item, key) => (
                    <p className="text-accent-500" key={key}>
                      {item}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col">
                  {data.value.map((item, key) => (
                    <p key={key}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 right-0 -z-50">
            <GravitationalDistortion />
          </div>
        </div>
      </div>
      <ProjectInfo
        description="The old website portfolio project serves as a showcase of my previous work and professional experience. Through this project, I aim to highlight my skills, expertise, and achievements to potential clients or employers. The portfolio incorporates various code techniques, including React, Three.js and SCSS, to create an aesthetically appealing and user-friendly interface. "
        website="https://old-portfolio.michkoff.com"
        source="https://github.com/ParzivalEugene/Portfolio-Website"
      />
    </section>
  );
};
