# URL-Shortener

This project is a full-stack application designed to convert long URLs into short, easily shareable links. Users can input a long URL and receive a shortened version that redirects to the original site.

## Features

- User Input: Users can enter a long URL.
- Shortened Link: The application generates a short URL for accessing the original site.
- Server-Side Rendering: Utilizes EJS for server-side rendering (SSR) to deliver dynamic content efficiently
## Technologies Used

- Node.js
- Express.js
- MongoDB
- EJS(template engine)

## Installation

1. Clone the repository:

   ```bash
     git clone https://github.com/Adityasahni04/URL-Shortener.git

# API Endpoints

## Home

- `GET /home`: Renders the main page where users can enter their long URLs to get shortened links

## URL
- `POST /URL`:Accepts a long URL, generates a unique short ID

  
  ```bash
  Example Request:"longUrl": "https://www.amazon.in/hz/mobile/mission?p=fjFrk3hMXZVU2ZrolCVVh9Y5iAZiQqL6Y4BGUpeulY9WLdGE4OkuwnEkLcE5W0De1vLkEVNMzFPAs2QhJW5Ev2UKVhU02HXpws8AF4g8ao4c4vdZwAJZftV2J2M0ZVcExdlGv8JGW8o%2BUnMqt1%2FxSK0N9TPQylBKYW8B4J3bZFfgJ4eGGS3FW1fcOnvOQWO%2BE%2BlzSzlWC%2FU6PRWnhkjsdwdl3gU9%2FiTvTHWKrSPXwvAXbFNgtUt7ve8%2BisStRLFCJ6%2BsU%2BMq28KlJ8%2FgBfk1qOgjBt3QVsFl2ffBIn4ShwCeGAQPgqSvabUyv%2Bzo%2F5hg20D%2B1ykAb2CEpMqz3RA0Y4QD5w%2B7lD%2BAFw%2BI09LrxT6%2BIdQkDaL2iSB0%2FojxrB1BfN4N22BVsCc0gWz0iX%2FUrIOHW4I%2F5vQLA%2BTti5GZMVc%3D&ref_=ci_mcx_mi&pf_rd_r=1FVCPQ11NTJSAQJB4YJR&pf_rd_p=4e979a44-3cbd-4362-a989-377bbd0fea77&pd_rd_r=eb783c24-8fd1-43f2-9a33-d99bf9260580&pd_rd_w=Dbiqe&pd_rd_wg=omthl"
  Example Response: "shortUrl": "http://localhost:3000/URL/abc123"
  
- `GET /URL/:shortid`:Redirects to the original URL using the shortened URL ID
