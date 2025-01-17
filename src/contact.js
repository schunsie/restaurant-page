{/* <div class="contact">
<h3><span class="green">Give us a call!</span></h3>
<p class="phoneNum"><img src="media/icons/phone.svg" alt="Phone">(123) 555-1234</p>
<h3>Or, <span class="green">leave a message</span></h3>
<p>And we'll get back to you ASAP!</p>
<form>
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" required placeholder="Enter your name here" autofocus>
    
    <label for="email">Email:</label>
    <input type="email" name="email" id="email" required placeholder="john@example.com">
    <label for="phone">Phone number: <span class="green">(optional)</span></label>
    <input type="tel" name="phone" id="phone">
    <label for="message">Message</label>
    <textarea name="message" id="message" required placeholder="Enter your query here"></textarea>

    <button type="submit" id="send">Send</button>
</form>
</div> */}
import phoneIcon from "./media/icons/phone.svg";


function renderContact() {
    const content = document.querySelector('.content');

    const contact = document.createElement('div');
    contact.classList.add('contact');

    const callHeader = document.createElement('h3');
    callHeader.innerHTML = '<span class="green">Give us a call!</span>';
    const callPar = document.createElement('p');
    callPar.innerHTML = `<img src=${phoneIcon} alt="Phone">(123) 555-1234`;
    callPar.classList.add('phoneNum');

    const msgHeader = document.createElement('h3');
    msgHeader.innerHTML = 'Or, <span class="green">leave a message</span>';
    const msgPar = document.createElement('p');
    msgPar.textContent = 'And we\'ll get back to you ASAP!'

    // Form
    const form = document.createElement('form');

        // Name input
    const nameL = document.createElement('label');
    nameL.for = 'name';
    nameL.textContent = "Name:";
    const name = document.createElement('input');
    name.type = 'text';
    name.name = 'name';
    name.id = 'name';
    name.required = true;
    name.placeholder = "Enter your name here";
    name.autofocus = true;

        // Email input
    const emailL = document.createElement('label');
    emailL.for = 'email';
    emailL.textContent = 'Email:'
    const email = document.createElement('input');
    email.type = 'email';
    email.name = 'email';
    email.id = 'email';
    email.required = true;
    email.placeholder = "john@example.org";
    
        // Phone number input
    const phoneL = document.createElement('label');
    phoneL.for = 'phone';
    phoneL.innerHTML = 'Phone number: <span class="green">(optional)</span>';
    const phone = document.createElement('input');
    phone.type = 'tel';
    phone.name = 'phone'
    phone.id = 'phone'

        // Message input
    const msgL = document.createElement('label');
    msgL.for = 'message';
    msgL.innerText = 'Message';
    const msg = document.createElement('textarea');
    msg.name = 'message';
    msg.id = 'message';
    msg.required = true;
    msg.placeholder = 'Enter your query here'

        // button
    const btn = document.createElement('button');
    btn.type = 'submit';
    btn.id = 'send';
    btn.textContent = 'Send';


    // appending everything
        // make form
    form.appendChild(nameL);
    form.appendChild(name);
    form.appendChild(emailL);
    form.appendChild(email);
    form.appendChild(phoneL);
    form.appendChild(phone);
    form.appendChild(msgL);
    form.appendChild(msg);
    form.appendChild(btn);

    contact.appendChild(callHeader);
    contact.appendChild(callPar);
    contact.appendChild(msgHeader);
    contact.appendChild(msgPar);
    contact.appendChild(form);

    content.appendChild(contact);
}

export { renderContact };