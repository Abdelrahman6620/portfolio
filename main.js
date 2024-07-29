
    // document.addEventListener('DOMContentLoaded', function() {
    //     const filters = document.querySelectorAll('.nav-link');
    //     const images = document.querySelectorAll('.imgCard .col-md-3');

    //     filters.forEach(filter => {
    //         filter.addEventListener('click', function() {
    //             const category = this.getAttribute('data-filter');

    //             // Remove active class from all filters and add it to the clicked one
    //             filters.forEach(f => f.classList.remove('active'));
    //             this.classList.add('active');

    //             // Show or hide images based on the selected category
    //             images.forEach(img => {
    //                 if (category === 'all' || img.classList.contains(category)) {
    //                     img.style.display = 'block';
    //                 } else {
    //                     img.style.display = 'none';
    //                 }
    //             });
    //         });
    //     });
    // });


const filterContainer = document.querySelector(".gallery-filter"),
 galleryItems = document.querySelectorAll(".gallery-item");

 filterContainer.addEventListener("click", (event) =>{
if(event.target.classList.contains("filter-item")){
 filterContainer.querySelector(".active").classList.remove("active");
 event.target.classList.add("active");
 const filterValue = event.target.getAttribute("data-filter");
	 galleryItems.forEach((item) =>{
 if(item.classList.contains(filterValue) || filterValue === 'all'){
 	item.classList.remove("hide");
 	 item.classList.add("show");
 }
 else{
 	item.classList.remove("show");
 	item.classList.add("hide");
 }
	 });
}
 });
