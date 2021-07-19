const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
  
const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
      ];
      
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

 // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const filterd = inventors.filter((data) => data.year >= 1500 && data.year < 1600);
    filterd.forEach( (data) => console.log(data.year));

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
    const map = inventors.map((data) => data.first + data.last);
    console.log(map);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const arr = inventors.sort(function(a,b){
        return a.year - b.year;
    })
    arr.forEach((data) => console.log(data.year)); 

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    //배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);

    const totalYears = inventors.reduce((total, inventors) => {
        return total + (inventors.passed - inventors.year);
    }, 0);
    console.log(totalYears); 

    // 5. Sort the inventors by years lived
    const arr5 = inventors.sort(function(a,b){
        return (a.passed - a.year) - (b.passed -b.year);
    })
    
    console.table(arr5); 

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    // const category = document.querySelector('.mw-category');
    // const link = category.querySelectorAll('a'); //node list 
    // const linkarray = Array.from(link);
    // const de = linkarray.filter((data) => data.includes('de'));


    // 7. sort Exercise
    //Sort the people alphabetically by last name
    const alpha = people.sort(function(one, two){
        const[olast, ofirst] = one.split(', ');
        const[tlast, tfirst] = two.split(', ');
        return olast > tlast ? 1 : -1;
    })
    console.table(alpha);

    // 8. Reduce Exercise
    // Sum up the instances of each of these

    const sum = data.reduce( (acc, now, index, val) => {
        if(!acc[now]){
            acc[now] = 0;
        }
        acc[now] += 1;
        
        return acc;
    },{});
    
 console.log(sum);