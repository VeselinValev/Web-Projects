package app.services;

import app.domain.Project;

public interface ProjectService {
    Project saveOrUpdate(Project project);

    Project findByProjectIdentifier(String identifier);

    Iterable<Project> findAllProjects();

    void deleteProject(String identifier);
}
