export function movies1(){
    let movies_1 = document.createElement('div');
 movies_1.innerHTML = `  <div id="backdrop"></div>
 <div class="modal" id="add-modal">
   <div class="modal__content">
     <label for="title">Movie Title</label>
     <input type="text" name="title" id="title" />
     <label for="image-url">Image URL</label>
     <input type="text" name="image-url" id="image-url" />
     <label for="rating">Your Rating</label>
     <input
       type="number"
       step="1"
       max="5"
       min="1"
       name="rating"
       id="rating"
     />
   </div>
   <div class="modal__actions">
     <button class="btn btn--passive">Cancel</button>
     <button class="btn btn--success">Add</button>
   </div>
 </div>
 <div class="modal" id="delete-modal">
   <h2 class="modal__title">Are you sure?</h2>
   <p class="modal__content">
     Are you sure you want to delete this item? This action can't be made
     undone!
   </p>
   <div class="modal__actions">
     <button class="btn btn--passive">No (Cancel)</button>
     <button class="btn btn--danger">Yes</button>
   </div>
 </div>

 <header>
   <h1>Favorite Movies</h1>
   <button>ADD MOVIE</button>
 </header>

 <main>
   <section id="entry-text" class="card">
     <p>Your personal movie database!</p>
   </section>
   <ul id="movie-list"></ul>
 </main>`;
 movies_1.classList.add(`blueBackground`);
 
 let fifty = 50
 Change(fifty)
 log(`fifty ${fifty}`)
 function Change(param1){
   param1 ++
   log(`param1 ${param1}`)
 }
 
 return movies_1
 }