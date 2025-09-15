package com.example.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Post;

@Repository
public interface HomeRepository extends MongoRepository<Post, String>{

	
}
