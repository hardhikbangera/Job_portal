package com.example.repository;

import java.util.List;

import com.example.demo.Post;


public interface SearchRepo {
	List<Post> searchByTechStack(String query);
}




