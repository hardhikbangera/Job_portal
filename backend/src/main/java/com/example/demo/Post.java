package com.example.demo;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Student")
public class Post {
	@Id
	private String id;
	private String job_name;
	private String job_desc;
	private String tech_stack[];

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getJob_name() {
		return job_name;
	}

	public void setJob_name(String job_name) {
		this.job_name = job_name;
	}

	public String getJob_desc() {
		return job_desc;
	}

	public void setJob_desc(String job_desc) {
		this.job_desc = job_desc;
	}

	@Override
	public String toString() {
		return "Post [id=" + id + ", job_name=" + job_name + ", job_desc=" + job_desc + "]";
	}

	public String[] getTech_stack() {
		return tech_stack;
	}

	public void setTech_stack(String tech_stack[]) {
		this.tech_stack = tech_stack;
	}

}
