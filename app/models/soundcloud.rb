Soundcloud::API.configure(mime: "application/json",
                           host: "https://api.soundcloud.com",
                           adapter: :net_http,
                           client_id: "3b231e0d3965769fca79609187395e53",
                           client_secret: "6fa197d26ceca704d88d5b3d070b6949",
                           redirect_uri: "localhost:3000/callback/"
                           )

