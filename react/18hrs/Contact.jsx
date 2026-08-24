export default function Contact({name,img,phone,email}) {
    console.log({name});
    
    return (
        <article className="contact-card">
            <img
                src={img}
                alt="Photo of Mr. Whiskerson"
            />
            <h3>{name}</h3>
            <div className="info-group">
                <img
                    src="https://github.com/scrimba/learn-fullstack-development/blob/main/15.%20React.js%20Fundamentals/03.%20Data-Driven%20React/10.%20Props%20part%205-%20Receiving%20props%20in%20a%20component/images/phone-icon.png?raw=true"
                    alt="phone icon"
                />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img
                    src="https://github.com/scrimba/learn-fullstack-development/blob/main/15.%20React.js%20Fundamentals/03.%20Data-Driven%20React/10.%20Props%20part%205-%20Receiving%20props%20in%20a%20component/images/mail-icon.png?raw=true"
                    alt="mail icon"
                />
                <p>{email}</p>
            </div>
        </article>
    )
}