import Card from "../UI/Card.JSX";

const projects = [
  {
    name: "Just Another Text Editor",
    description: `J.A.T.E is a text editor that runs in the browser for you to code.`,
    repo: 'https://github.com/N-lara/Text-editor',
  }
]


export default function Projects() {
  return (
    <div>
      {projects.map(({ name, description, repo }, index) => (
        <div key={index} href={repo}>
          <Card name={name} description={description} />
        </div>
      ))}
    </div>
  );
}
