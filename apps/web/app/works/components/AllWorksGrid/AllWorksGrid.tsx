import React from "react";
import { studentProjects } from "../../mocks/projects";
import {
  FILTER_INDEX_TO_CATEGORY,
  CATEGORY_INFO,
} from "../../constants/categories";
import ProjectCard from "../ProjectCard/ProjectCard";
import * as S from "./AllWorksGrid.style";

export default function AllWorksGrid() {
  return (
    <S.GridContainer>
      {studentProjects.map((project) => {
        const category = FILTER_INDEX_TO_CATEGORY[project.filterIndex];
        if (!category) return null;

        const categoryInfo = CATEGORY_INFO[category];

        return (
          <ProjectCard
            key={project.id}
            project={project}
            categoryNameEn={categoryInfo.categoryNameEn}
            onClick={() => {}}
          />
        );
      })}
    </S.GridContainer>
  );
}
