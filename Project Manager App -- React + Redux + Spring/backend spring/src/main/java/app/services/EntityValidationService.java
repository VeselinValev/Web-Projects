package app.services;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

public interface EntityValidationService {
    ResponseEntity<?> validateEntity(BindingResult result);
}
