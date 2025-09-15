package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.repository.HomeRepository;
import com.example.repository.SearchRepo;

import jakarta.annotation.PostConstruct;

@RestController
@CrossOrigin(origins="http://localhost:5173")
public class MainController {

	@Autowired
	HomeRepository repo;
	
	@Autowired
	SearchRepo searchrepo;
	
	@GetMapping("/")
	public List<Post> find() {
		return repo.findAll();
	}
	
    @PostMapping("/posts/search")
    public List<Post> findByTechStack(@RequestBody SearchRequest request) {
        return searchrepo.searchByTechStack(request.getQuery());
    }

    // Inner DTO class for request body
    public static class SearchRequest {
        private String query;

        public String getQuery() { return query; }
        public void setQuery(String query) { this.query = query; }
    }
    @PostMapping("/posts")
    public Post addPost(@RequestBody Post post) {
        return repo.save(post);
    }
}
