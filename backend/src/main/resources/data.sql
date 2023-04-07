-- Users
INSERT INTO tb_user (id, username, password, name, email, location, phone, profile_img_url) VALUES (1, 'johndoe', 'password1', 'John Doe', 'johndoe@example.com', 'New York, NY', '+1 555-555-5555', 'https://randomuser.me/api/portraits/men/1.jpg');
INSERT INTO tb_user (id, username, password, name, email, location, phone, profile_img_url) VALUES (2, 'janedoe', 'password2', 'Jane Doe', 'janedoe@example.com', 'Los Angeles, CA', '+1 555-555-5555', 'https://randomuser.me/api/portraits/women/2.jpg');
INSERT INTO tb_user (id, username, password, name, email, location, phone, profile_img_url) VALUES (3, 'bobsmith', 'password3', 'Bob Smith', 'bobsmith@example.com', 'Chicago, IL', '+1 555-555-5555', 'https://randomuser.me/api/portraits/men/3.jpg');
INSERT INTO tb_user (id, username, password, name, email, location, phone, profile_img_url) VALUES (4, 'amandajohnson', 'password4', 'Amanda Johnson', 'amandajohnson@example.com', 'Houston, TX', '+1 555-555-5555', 'https://randomuser.me/api/portraits/women/4.jpg');
INSERT INTO tb_user (id, username, password, name, email, location, phone, profile_img_url) VALUES (5, 'michaelbrown', 'password5', 'Michael Brown', 'michaelbrown@example.com', 'Philadelphia, PA', '+1 555-555-5555', 'https://randomuser.me/api/portraits/men/5.jpg');
INSERT INTO tb_user (id, username, password, name, email, location, phone, profile_img_url) VALUES (6, 'sarahlee', 'password6', 'Sarah Lee', 'sarahlee@example.com', 'Phoenix, AZ', '+1 555-555-5555', 'https://randomuser.me/api/portraits/women/6.jpg');
INSERT INTO tb_user (id, username, password, name, email, location, phone, profile_img_url) VALUES (7, 'davidwilson', 'password7', 'David Wilson', 'davidwilson@example.com', 'San Antonio, TX', '+1 555-555-5555', 'https://randomuser.me/api/portraits/men/7.jpg');
INSERT INTO tb_user (id, username, password, name, email, location, phone, profile_img_url) VALUES (8, 'emilythomas', 'password8', 'Emily Thomas', 'emilythomas@example.com', 'San Diego, CA', '+1 555-555-5555', 'https://randomuser.me/api/portraits/women/8.jpg');

-- Chats
INSERT INTO tb_chat (id, name, purpose, open_to_public, owner_id) VALUES (1, 'Travel', 'Discussing travel destinations and tips', true, 1);
INSERT INTO tb_chat (id, name, purpose, open_to_public, owner_id) VALUES (2, 'Sports', 'Talking about all things sports', false, 2);
INSERT INTO tb_chat (id, name, purpose, open_to_public, owner_id) VALUES (3, 'Cooking', 'Sharing recipes and cooking techniques', true, 3);
INSERT INTO tb_chat (id, name, purpose, open_to_public, owner_id) VALUES (4, 'Music', 'Discussing all genres of music', false, 4);
INSERT INTO tb_chat (id, name, purpose, open_to_public, owner_id) VALUES (5, 'Books', 'Sharing book recommendations and reviews', true, 5);

-- Chat Users
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (1, 1);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (1, 2);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (1, 3);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (1, 4);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (1, 5);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (1, 6);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (1, 7);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (1, 8);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (2, 1);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (2, 2);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (2, 3);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (2, 4);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (2, 5);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (3, 3);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (3, 4);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (3, 5);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (3, 6);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (3, 7);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (4, 2);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (4, 5);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (4, 6);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (4, 8);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (5, 1);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (5, 2);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (5, 4);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (5, 6);
INSERT INTO tb_chat_users (chat_id, user_id) VALUES (5, 8);

-- Messages for Travel chat
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Hey guys, I just got back from a trip to Thailand and it was amazing! I highly recommend it', '2022-12-01', 1, 1);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I agree, Thailand is beautiful. What was your favorite part of the trip?', '2022-12-01', 2, 1);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I loved visiting the temples and trying the street food. What about you?', '2022-12-02', 1, 1);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('The beaches were definitely my favorite part. I could spend all day lounging on the sand', '2022-12-03', 3, 1);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Has anyone been to Japan? I want to plan a trip there next', '2022-12-04', 4, 1);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I have! Tokyo is an amazing city with so much to see and do. And the food is incredible', '2022-12-05', 5, 1);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I second that, Tokyo is awesome. But Kyoto is also a must-visit, especially during cherry blossom season', '2022-12-06', 6, 1);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Thanks for the tips, guys. I am adding both cities to my list. Any other recommendations for Japan?', '2022-12-07', 4, 1);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Hiroshima is a city with a tragic history but it is also very beautiful and has great food', '2022-12-08', 7, 1);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('If you have time, you should also visit Nara. It is a small city with a lot of history and cute deer roaming around', '2022-12-09', 8, 1);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I love traveling, but sometimes it can be stressful. How do you guys deal with the stress of planning and being away from home?', '2022-12-10', 2, 1);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I usually try to plan everything ahead of time so I am not worried about things like accommodation and transportation', '2022-12-11', 1, 1);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I like to take things slow and not plan too much. That way, I can be more spontaneous and enjoy the trip without feeling rushed', '2022-12-12', 3, 1);

-- Messages for Sports chat
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Did you catch the game last night?', '2022-09-01', 1, 2);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Yeah, it was a great match!', '2022-09-01', 2, 2);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Who do you think will win the championship this year?', '2022-09-02', 3, 2);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I think it will be the Lakers', '2022-09-02', 4, 2);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Really? I think the Nets have a better chance', '2022-09-02', 5, 2);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('LeBron James is the best player in the league', '2022-09-03', 1, 2);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('No way, it''s Kevin Durant', '2022-09-03', 2, 2);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('What''s your favorite sport?', '2022-09-04', 3, 2);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I love basketball!', '2022-09-04', 4, 2);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I''m more of a football fan myself', '2022-09-04', 5, 2);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Who''s your favorite team?', '2022-09-05', 1, 2);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I''m a big fan of the Patriots', '2022-09-05', 2, 2);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I''m a Steelers fan', '2022-09-05', 3, 2);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('What''s your favorite sport to watch live?', '2022-09-06', 4, 2);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Definitely hockey, it''s so intense!', '2022-09-06', 5, 2);

-- Messages for Cooking chat
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Hi everyone, I''m new here! Can anyone recommend a good cookbook for beginners?', '2022-01-01', 5, 3);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Welcome @user5! I''d recommend "The Joy of Cooking". It''s a classic and has tons of great recipes.', '2022-01-01', 4, 3);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I agree with @user4. That''s a great one to start with!', '2022-01-01', 6, 3);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('If you''re interested in Italian cuisine, I''d recommend "Essentials of Classic Italian Cooking" by Marcella Hazan. It''s a bit more advanced, but the recipes are amazing!', '2022-01-02', 7, 3);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Thanks for the recommendation, @user7. I''ll check it out!', '2022-01-02', 5, 3);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Has anyone tried making homemade pasta before? I''ve always wanted to give it a try.', '2022-01-03', 6, 3);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Yes, I have! It''s a bit time-consuming, but it''s definitely worth it.', '2022-01-03', 4, 3);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Agreed. There''s nothing like fresh pasta!', '2022-01-03', 5, 3);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Do you have any tips for making it easier, @user4?', '2022-01-03', 6, 3);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I''d recommend investing in a pasta machine if you don''t already have one. It makes the process much quicker and easier.', '2022-01-03', 4, 3);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Thanks for the tip, @user4. I''ll definitely look into getting one!', '2022-01-03', 6, 3);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I made homemade pizza last night and it turned out great! Does anyone have any favorite pizza recipes they''d like to share?', '2022-01-04', 5, 3);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I usually go with a classic margherita pizza - fresh mozzarella, tomato sauce, and basil. Simple but delicious!', '2022-01-04', 7, 3);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I like to mix things up and do a pesto pizza with roasted tomatoes and goat cheese. It''s really tasty!', '2022-01-04', 4, 3);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('That sounds amazing, @user4. I''ll have to try it!', '2022-01-04', 5, 3);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Thanks for the ideas, everyone! I can''t wait to try them out.', '2022-01-04', 6, 3);

-- Messages for Music chat
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('What is your favorite genre of music?', '2022-01-01', 2, 4);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I love rock music', '2022-01-02', 5, 4);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I prefer jazz and blues', '2022-01-03', 6, 4);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I listen to a lot of hip hop and rap', '2022-01-04', 8, 4);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Have you guys heard of the new pop artist?', '2022-01-05', 2, 4);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I have, I think she''s really talented', '2022-01-06', 5, 4);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I don''t really like pop music', '2022-01-07', 6, 4);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I''m more into electronic and techno', '2022-01-08', 8, 4);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('What do you guys think of classical music?', '2022-01-09', 2, 4);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I love classical music, it''s so relaxing', '2022-01-10', 5, 4);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I think it''s boring', '2022-01-11', 6, 4);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I haven''t really listened to much classical music', '2022-01-12', 8, 4);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('What''s your favorite music festival?', '2022-01-13', 2, 4);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I love Coachella', '2022-01-14', 5, 4);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I prefer smaller festivals, like Bonnaroo', '2022-01-15', 6, 4);

-- Messages for Books chat
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Has anyone read "The Nightingale" by Kristin Hannah?', '2022-05-10', 1, 5);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Yes, I have! It was such a beautiful and heartbreaking story.', '2022-05-10', 2, 5);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I loved that book too! I also recommend "The Book Thief" by Markus Zusak.', '2022-05-10', 4, 5);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('"The Book Thief" is on my reading list, I have heard great things about it.', '2022-05-10', 8, 5);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I just finished "The Vanishing Half" by Brit Bennett, has anyone read it?', '2022-05-11', 6, 5);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I haven''t read that one, what''s it about?', '2022-05-11', 1, 5);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('It''s about twin sisters who grow up in a small southern black community and eventually go their separate ways. It''s a really thought-provoking story about race and identity.', '2022-05-11', 6, 5);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('Sounds interesting, I''ll have to add it to my list!', '2022-05-11', 2, 5);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I just finished "The Overstory" by Richard Powers, and I highly recommend it to anyone who loves trees or nature.', '2022-05-12', 4, 5);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('That sounds like a unique topic for a book, I''ll have to check it out!', '2022-05-12', 8, 5);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('"The Overstory" is a great book, and it really made me think more about the importance of trees and nature in our lives.', '2022-05-12', 4, 5);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I just finished "The Testaments" by Margaret Atwood, and I was blown away by it.', '2022-05-13', 3, 5);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I''ve been meaning to read that one, what did you like about it?', '2022-05-13', 2, 5);
INSERT INTO tb_message (text, sent_at, user_id, chat_id) VALUES ('I loved the way Atwood continued the story of "The Handmaid''s Tale" and expanded on the world and characters she created. It was a great read!', '2022-05-13', 3, 5);