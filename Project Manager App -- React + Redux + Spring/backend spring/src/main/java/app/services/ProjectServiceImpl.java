package app.services;

import app.domain.Project;
import app.exceptions.ProjectIdentifierException;
import app.repositories.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectServiceImpl implements ProjectService {

    private ProjectRepository projectRepository;

    @Autowired
    public ProjectServiceImpl(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public Project saveOrUpdate(Project project){
        try {
            return this.projectRepository.save(project);
        }catch (Exception e){
            throw new ProjectIdentifierException("Project ID '" + project.getProjectIdentifier().toUpperCase() + "' already exists.");
        }
    }

    @Override
    public Project findByProjectIdentifier(String identifier) {

        Project project = this.projectRepository.findByProjectIdentifier(identifier.toUpperCase())
                .orElseThrow(() -> new ProjectIdentifierException("Project ID '" + identifier.toUpperCase() + "' does not exists."));
        return project;
    }

    @Override
    public Iterable<Project> findAllProjects(){
        return this.projectRepository.findAll();
    }

    @Override
    public void deleteProject(String identifier){
        Project project  = this.projectRepository.findByProjectIdentifier(identifier.toUpperCase())
                .orElseThrow(() -> new ProjectIdentifierException("Cannot delete project with ID '" + identifier.toUpperCase() + "'. Project does not exists."));

        this.projectRepository.delete(project);
    }
}
