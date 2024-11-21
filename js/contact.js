let elementForm = `

    <!-- نموذج الاتصال -->
        <form id="form" class="phon">
            <h2 class="h-pho">Contact Us</h2>
            <div class="user-phone-mail">
                <label for="user">User Name</label>
                <input id="user" type="text" placeholder="Your Name" required>

                <label for="phone">Phone</label>
                <input id="phone" type="number" placeholder="Your Phone" required>

                <label for="mail">Email</label>
                <input id="mail" type="email" placeholder="Your Email" required>

                <div class="sub-reset">
                    <input type="submit" value="Submit">
                    <input type="reset" value="Reset">
                </div>
            </div>
        </form>
            <div class="main-contact"> 
                <div class="contact">
                <h2 class="h-pc">Contact Us</h2>
                <p>Any question or remarks? Just us a message</p>
                <form class="pc">
                <div class="inputs">
                    <div class="mail">
                        <label>Email</label>
                        <input type="mail" class="in ma" placeholder="Enter a valid email"></input>
                    </div>
                    <div class="name">
                        <label>Name</label>
                        <input type="text" class="in na" placeholder="Enter your Name"></input>
                    </div>
                    </div>
                    <input type="submit" class="submit" value="Send"></input>
                </form>
                </div>
                <div class="social">
                    <div class="card">
                        <a href="#"><img src="../images/Facebook_LOGO.png"></a>
                        <h3>Facebook</h3>
                    </div>

                    <div class="card">
                       <a href="#"><img src="../icones/EpPhone.png"></a>
                        <h3>+20 Your Phone Here</h3>
                    </div>

                    <div class="card">
                        <a href="#"><img src="../images/m.png"></a>
                        <h3>Email</h3>
                    </div>
                </div>
            </div>

    <!-- Firebase SDK -->
    <script src="https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js"></script>

    <script>
      // Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyCPpTAJDRfFuDkq2TGCVIU_LnmYRBXTnSc",
        authDomain: "new-protfolio.firebaseapp.com",
        projectId: "new-protfolio",
        storageBucket: "new-protfolio.appspot.com",
        messagingSenderId: "90141039664",
        appId: "1:90141039664:web:44d13d2f3b943f510aa1f5"
      };

      // Initialize Firebase
      const app = firebase.initializeApp(firebaseConfig);
      const db = firebase.firestore(app);

      document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();

        const userName = document.getElementById("user").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("mail").value;

        if (userName && phone && email) {
          db.collection("customers").add({
            name: userName,
            phone: phone,
            email: email
          })
          .then(() => {
            alert("تم إرسال بياناتك بنجاح!");
            document.getElementById("form").reset();
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
        } else {
          alert("يرجى ملء جميع الحقول!");
        }
      });
    </script>
            `;
            document.getElementById('contact').innerHTML = elementForm;
