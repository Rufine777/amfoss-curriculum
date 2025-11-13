# MeloFi - Cross-Platform Music & Podcast Streaming

## Technical Terms

| Term          | Meaning                                           |
|---------------|--------------------------------------------------|
| AI            | Makes computers think and learn like humans.    |
| API           | Allows different apps to communicate with each other. |
| Frontend      | What users see and interact with.               |
| Backend       | Works behind the scenes to process and manage data. |
| Database      | Stores songs, users, and playlists.             |
| Encryption    | Keeps data secure and private.                  |
| React/Kotlin/Flask | Technologies used to build web, mobile, and backend apps. |

---

## 1. Introduction

### 1.1 Purpose
This document defines the **Software Requirement Specification (SRS)** for **MeloFi**, a cross-platform digital music ecosystem.  
It explains what MeloFi does, how it works, and the technologies used.  

It serves as a guide for:
- **Developers and designers** to build the system  
- **Project managers and stakeholders** to track progress  
- **Investors** to understand the business and technical goals  

### 1.2 Scope
MeloFi is a music platform that allows users to:
- Listen to global songs and playlists  
- Help artists earn money  

It works on web browsers and mobile apps, keeping user data and progress synchronized across devices.

### 1.3 Overview
MeloFi combines streaming, community, and monetization into one platform.  
It follows a **modular architecture**, where each part works independently but integrates seamlessly.  

**Main Modules:**
- Music Streaming  
- Artist Marketplace  
- Community and Social Features  

### 1.4 Target Audience
- **Music Listeners:** Explore and enjoy songs  
- **Investors / Partners:** Support or fund artists  

---

## 2. Tech Stack

| Component       | Technology                  |
|-----------------|-----------------------------|
| Frontend        | React.js, Tailwind CSS      |
| Mobile          | Kotlin, Jetpack Compose     |
| Backend         | Flask (Python), REST API    |
| Database        | SQLite / PostgreSQL         |
| Audio           | ExoPlayer                   |
| Storage         | Room / DataStore            |
| Version Control | GitHub                      |
| Hosting         | Render / Heroku             |
