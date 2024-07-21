// ! Strategic Preparation Section Start
$('#strategicPrepCarousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    mouseDrag: true,
    touchDrag: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
            autoplay: true,
        },
        600: {
            items: 2,
            autoplay: true,
        },
        1000: {
            items: 4
        }
    }
})
// ! Strategic Preparation Section End
// ! Coaching Programs Section Start
$('#coachingProgramsCarousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 1,
            autoplay: true,
        },
        600: {
            items: 2,
            autoplay: true,
        },
        1000: {
            items: 2
        }
    }
})
// ! Coaching Programs Section End

// * offlineCourses.html File Start
// ! Join Best Institute Section Start
let readBTN = $(".readBtn");
$(".readBtn").click(() => {
    if (readBTN.html() == "Read More") {
        $(".readBtn").parent().prepend(`<div class="prependContent"><div class="content1">
            <p>We aim to provide the most intensive law coaching in Prayagraj. Law Prep Tutorial is the leading law coaching in Prayagraj that provides preparation for all law entrance tests. We also provide comprehensive study material that lets students cover the CLAT syllabus properly. If you are a law aspirant from Prayagraj, then we assure you of the best CLAT coaching in Prayagraj.</p>
          </div>
          <h2 class="common-H2 fs-4 text-start mt-5">Our CLAT Courses in Prayagraj</h2>
          <div class="">
            <p>Scores in CLAT or other law entrance tests are major career-deciding factors for aspirants. Law prep tutorial has been the most preferred law coaching by students. Our team has the best CLAT trainers from across the country. They have profound teaching experience and are up-to-date with all their subject knowledge. </p>
          
            <p>Apart from education, our trainers are willing to provide every possible career guidance to all the students. Our excellent results and student progress are enough to show our brand excellence. </p>
            <p>To create a strong foundation, we provide three different CLAT courses in Prayagraj. </p>
            <h5 style="color: #101828; line-height: 19px; font-size: 16px; font-weight:400;">CLAT 2025 Course</h5>
            <p>Law Prep Tutorial's comprehensive training provides students with interactive CLAT coaching options that help them thoroughly prepare for CLAT and other law entrance tests.</p>
            <h5 style="color: #101828; line-height: 19px; font-size: 16px; font-weight:400;">CLAT 2026 Course</h5>
            <p> With enough preparation time remaining for the exam, every aspirant has the best opportunity to prepare for the exam with our 800+ hours of classroom teaching.</p>
            <h5 style="color: #101828; line-height: 19px; font-size: 16px; font-weight:400;">CLAT Crash Course</h5>
            <p>This course will cover all the important CLAT exam topics and help students prepare for the exam quickly. The course also covers exam preparation for other exams like AILET.</p>
            <h2 class="common-H2 fs-4 text-start">What Makes us the Most Trusted Coaching for CLAT in Prayagraj</h2>
            <div class="content1">
              <h5 style="color: #101828; line-height: 19px; font-size: 16px; font-weight:400;">Detailed CLAT Study Material</h5>
              <p>Explore detailed CLAT syllabus and topic from our 55+ printed books and 150+ E-books. </p>
              <h5 style="color: #101828; line-height: 19px; font-size: 16px; font-weight:400;">Personalised Assistance</h5>
              <p>Our team is always available to provide the best career counseling and guidance.  </p>
              <h5 style="color: #101828; line-height: 19px; font-size: 16px; font-weight:400;">Top Class faculty</h5>
              <p>All our trainers have years of CLAT course teaching experience and are specialized in particular topics.</p>
              <h5 style="color: #101828; line-height: 19px; font-size: 16px; font-weight:400;">Doubt Sessions</h5>
              <p>Law Prep Tutorial provide regular doubt-clearing sessions that help the student maintain their preparation pace. </p>
              <h5 style="color: #101828; line-height: 19px; font-size: 16px; font-weight:400;">CLAT Mock Tests</h5>
              <p>Our course also involves 150+ mock tests and 600+ topic-related tests. These tests will let the students examine their exam preparation.</p>
              <h5 style="color: #101828; line-height: 19px; font-size: 16px; font-weight:400;">Competitive Price</h5>
              <p>We know that career dreams matter the most. Therefore, we offer all our CLAT courses at the most competitive price in the market.</p>
            </div>
          </div></div>`)
        $(".readBtn").html("Read Less")
    }
    else if (readBTN.html() == "Read Less") {
        $(".readBtn").prev().remove()
        $(".readBtn").html("Read More")
    }
})
// ! Join Best Institute Section End
// * offlineCourses.html File End

//  * results.html File Start
// ! Results Section Start
//   ? Work on Pending
// ! Results Section End
//  * results.html File End