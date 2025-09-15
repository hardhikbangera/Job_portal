package com.example.repository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.convert.MongoConverter;
import org.springframework.stereotype.Repository;

import com.example.demo.Post;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;



@Repository
public class SearchRepoImplementation implements SearchRepo{

    @Autowired
    MongoClient client;
    
    @Autowired
    MongoConverter convertor;


    public List<Post> searchByTechStack(String query) {
   
    	final ArrayList<Post> post=new ArrayList<>();
    	MongoDatabase mongo=client.getDatabase("mydb");
    	MongoCollection<Document>collection=mongo.getCollection("Student");
    	AggregateIterable<Document> result=collection.aggregate( Arrays.asList(new Document("$search", 
    		    new Document("text", 
    		    new Document("query", query)
    		                .append("path", Arrays.asList("tech_stack", "job_name", "job_desc")))), 
    		    new Document("$limit", 5L)));
    	result.forEach(x->post.add(convertor.read(Post.class, x)));
    	return post;
    }



}

