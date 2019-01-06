package app.repositories;

import app.domain.Project;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {

    Optional<Project> findByProjectIdentifier(String identifier);

    @Override
    Iterable<Project> findAll();
}

