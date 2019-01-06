package app.services;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import java.util.HashMap;
import java.util.Map;

@Service
public class EntityValidationServiceImpl implements EntityValidationService {

    @Override
    public ResponseEntity<?> validateEntity(BindingResult result){
        ResponseEntity<?> responseEntity = null;
        if (result.hasErrors()){
            Map<String, String> errors = new HashMap<>();

            for (FieldError error: result.getFieldErrors()){
                errors.put(error.getField(), error.getDefaultMessage());
            }
            responseEntity = new ResponseEntity<>(errors, HttpStatus.BAD_REQUEST);
        }

        return responseEntity;
    }
}
