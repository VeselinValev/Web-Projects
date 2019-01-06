package app.web.controllers;

import app.domain.Project;
import app.services.EntityValidationService;
import app.services.ProjectService;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/project")
public class ProjectController {

    private ProjectService projectService;
    private EntityValidationService entityValidationService;

    @Autowired
    public ProjectController(ProjectService projectService, EntityValidationService entityValidationService) {
        this.projectService = projectService;
        this.entityValidationService = entityValidationService;
    }

    @PostMapping("")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result){
        ResponseEntity<?> responseEntity = this.entityValidationService.validateEntity(result);
        if (responseEntity != null){
            return responseEntity;
        }
        Project newProject = this.projectService.saveOrUpdate(project);
        return new ResponseEntity<>(newProject, HttpStatus.CREATED);
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<?> findProjectByIdentifier(@PathVariable String projectId){
        Project project = this.projectService.findByProjectIdentifier(projectId);
        return new ResponseEntity<>(project, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<?> findAllProjects(){
        Iterable<Project> projects = this.projectService.findAllProjects();
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }

    @DeleteMapping("/{projectId}")
    public ResponseEntity<?> deleteProject(@PathVariable String projectId){
        this.projectService.deleteProject(projectId);
        return new ResponseEntity<>("Project '" + projectId.toUpperCase() + "' deleted.", HttpStatus.OK);
    }

}
