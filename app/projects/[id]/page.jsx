import React from "react";
import { SingleProject } from "../../lib/singleProjects";
const SingleProduct = async ({ params }) => {
  const project = await SingleProject(params.id);
  console.log(project);
  return (
    <div className="container">
      {project && (
        <div className="card2" key={project.id}>
          <h1>{project.title}</h1>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
