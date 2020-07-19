# WhereDidIStop

---

## routes:
POST /api/login  
> if succeded a jwt is returned  
> Body:
* name
* email
* password  

POST /api/signup
> Body:
* email
* password  

GET /api/contents
> If authenticated, all user contents will be sent

POST /api/contents
> If authenticated, user will be able to save a content  
Body:  
* Platform(String) - where user watches or reads it.
* Title (String) - what is the content called  (required).
* Page (String) - which page the user is if its a book.
* Episode (String) - which episode the user is if its aa video.  
 ps: either page or episode should be included.
* Finished (Boolean) - whether that episode or page is finished.  


PUT /api/contents/:id
> If authenticated, users can update one of their contents.


DELETE /api/contents/:id
> If authenticated, users can delete one of their contents

---  
Which tools have been used to develop this api so far?  
* Javascript  
* Express  
* Bcrypt to hash user password  
* Postgres as sql sgbd  
* jwt  
