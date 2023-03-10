/// طريقة استدعاء قاعدة البيانات 

const sqlite3 = require('sqlite3').verbose();




/// طريقة الاتصال بقاعدة البيانات الخاصة بنا 

const db = new sqlite3.Database('Blog.db', (err) => {
    if (err) {
        return console.error (err.message);
    }
    console.log ('Connected to the Blog SQLite DataBase')
});




/// طريقة انشاء الجداول في قاعدة البيانات 

/*  db.run ('CREATE TABLE IF NOT EXISTS Articles(ArticleID INTEGER PRIMARY KEY, ArticleName TEXT, Author TEXT, Date TEXT)', (err) => {
    if(err) {
        return console.error(err.message)
    }
    console.log('Table one created')
}); */


/* db.run ('CREATE TABLE IF NOT EXISTS Comments(CommentID INTEGER PRIMARY KEY, Name TEXT, Content TEXT, Date TEXT, ArticleID INTEGER)'+
    '(FOREIGN KEY (ArticleID) REFERENCES Articles (ArticleID))',
        (err) => {
        if(err) {
          return console.error(err.message)
        }
        console.log('Table two created')
});  */




/// طريقة اضافة البيانات في الجداول

/* db.run ('INSERT INTO Articles (ArticleID, ArticleName, Author, Date)'+
                      'VALUES (1111 , "PHP" , "Ahmad" , "2019"),'+
                             '(2222 , "DataBase" , "Mohamad" , "2020"),'+
                             '(3333 , "JavaScript" , "Hadi", "2019"),'+
                             '(4444 , "PHP" , "Reem" , "2020"),'+
                             '(5555 , "JavaScript" , "Ola", "2020"),'+
                             '(6666 , "Ruby" , "Hasan" , "2019"),'+
                             '(7777 , "Ruby" , "Ali" , "2020"),'+
                             '(8888 , "PHP" , "Ahmad" , "2020"),'+
                             '(9999 , "Laravel" , "Ahmad" , "2019")',
                             (err) => {
                                 if(err) {
                                     return console.error(err.message)
                                 }
                                 console.log('Data inserted to Articles table')
                             });




db.run('INSERT INTO Comments (Content, Name, Date, ArticleID)'+
                     'VALUES ("مرحبًا مقالة رائعة", "Ahmad", "2019", 1111),'+
                            '("شكرًا لك على هذه المقالة", "Hadi", "2019", 2222),'+
                            '("من اروع المقالات التي قرأتها", "Hasan", "2020", 3333),'+
                            '("مقالة رائعة", "Fatema", "2019", 4444),'+
                            '("مرحبًا مقالة رائعة", "Ahmad", "2019", 1111),'+
                            '("مرحبًا مقالة رائعة", "Hasan", "2019", 2222),'+
                            '("مرحبًا مقالة رائعة", "Hadi", "2019", 2222),'+
                            '("مرحبًا مقالة رائعة", "Ahmad", "2019", 1111),'+
                            '("مرحبًا مقالة رائعة", "Hadi", "2020", 1111),'+
                            '("مرحبًا مقالة رائعة", "Mohamad", "2020", 4444),'+
                            '("مرحبًا مقالة رائعة", "Ahmad", "2020", 2222),'+
                            '("مرحبًا مقالة رائعة", "Ahmad", "2020", 4444),'+
                            '("مرحبًا مقالة رائعة", "Ahmad", "2020", 1111),'+
                            '("المقال غير جيد يمكن أن يكون افضل", "Ahmad", "2020", 1111),'+
                            '("مرحبًا مقالة رائعة", "Hadi", "2020", 4444),'+
                            '("مرحبًا مقالة رائعة", "Ahmad", "2020", 1111),'+
                            '("مرحبًا مقالة رائعة", "Ahmad", "2020", 2222),'+
                            '("شكرًا لك أستاذي على هذا المقال الرائع", "Mohamad", "2020", 5555),'+
                            '("مرحبًا مقالة رائعة", "Hadi", "2019", 1111),'+
                            '("مرحبًا مقالة رائعة من اروع المقالات التي قرأتها", "Ahmad", "2020", 5555),'+
                            '("مرحبًا مقالة رائعة", "Mohamad", "2020", 4444),'+
                            '("مرحبًا مقالة رائعة", "Ahmad", "2019", 2222),'+
                            '("مرحبًا مقالة رائعة", "Ahmad", "2020", 1111),'+
                            '("مرحبًا مقالة رائعة", "Hadi", "2020", 4444),'+
                            '("مرحبًا مقالة رائعة", "Ahmad", "2020", 5555),'+
                            '("مرحبًا مقالة رائعة", "Mohamad", "2020", 1111),'+
                            '("ارجو زيارة صفحتي و الاعجاب بها , يوجد بها الكثير من المنتجات الرائعة", "Ali", "2019", 5555)', 
                            function(err){
                                if(err){
                                    return console.error(err.message)
                                }
                                console.log('Data inserted to Comments table')
                            }); */




/// مثال لطريقة الاستعلام عن البيانات عن طريق الاستعلامات الفرعية 

/* db.all('SELECT ArticleName, Date, (SELECT count(*) FROM Comments WHERE Articles.ArticleID = Comments.ArticleID) AS Comments FROM Articles', 
    function(err, table){
        if(err){ 
            return console.error(err.message) 
        }
        (console.log(table))
    });  */
    
    


/// مثال لطريقة تعديل البيانات 

/* db.run('UPDATE Comments SET Content = "من اروع المقالات التي قرأتها , شكرا لك" WHERE CommentID = 3' , function(err){
    if(err){
        return console.error(err.message)
    }
    console.log('Data Updated')
}); */



/// مثال لطريقة حذف البيانات 

/* db.run('DELETE FROM Comments WHERE CommentID = 6' , function(err){
    if(err){
        return console.error(err.message)
    }
    console.log('Data Deleted')
}); */



/// تدريب عملي 

/* db.all('SELECT Comments.Name, Comments.Content, Articles.ArticleName, Articles.Date FROM Comments JOIN Articles ON Comments.ArticleID = Articles.ArticleID', 
    function(err, taple){
        if(err){
            return console.error(err.message)
        }
        console.log(taple)
});  */



/// طريقة اغلاق قاعدة البيانات     

db.close( (err) => {
    if(err) { 
        return console.error(message.err)
     }
    console.log ('Close the database connection')
});