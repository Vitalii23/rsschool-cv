# Vitalii Danilov

## Post

System Administrator

## Contact

* Phone: +7-905-991-23-14
* E-mail: danilov.vit.an@gmail.com
* [Telegram](https://t.me/vitaliiandan)
* [Linkedln](https://www.linkedin.com/in/%D0%B2%D0%B8%D1%82%D0%B0%D0%BB%D0%B8%D0%B9-%D0%B4%D0%B0%D0%BD%D0%B8%D0%BB%D0%BE%D0%B2-691077191/)

## About Myself

At this stage, my career path has received quite a few skills and abilities that have led me to what I am. 
Through my position as an electronics engineer, I learned how to organize work so that it can be done on time, work in a team and get an engineering mindset. 
Thanks to my knowledge of programming, I simplified some procedures that increased the efficiency of production, which taught me to be diligent and get my way. 
Now I work as a system administrator, I study administration and system maintenance of equipment.

## Skills and Proficiency

1. Programming Languages: Java, C#, Javasciprt
2. Versin control systems: Git
3. Database: MSSQL, MySQL
4. Framework: Hibernate
5. GUI: JavaFX, WinForm, WPF, UWP
6. Package manager: Maven, NuGet
7. IDE: IntelliJ IDEA, Visual Studio, WebStrom
8. Arduino


## Code example

### Pair of gloves

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

```
function numberOfPairs(gloves)
{
    let result = 0;
    const array = gloves.reduce((acc, element) => {
        acc[element] = (acc[element] || 0) + 1;
        return acc;
    }, {})
    
    for(let color in array){ result += Math.floor(array[color] / 2); }

    return result;
}
```

## Experience

### Electronics Engineer

Location: NPO Siberian Mashinostroitel  
Time:June 2020 - May 2022  
Responsibilities: Assembly and repair of electrical equipment, software development  
SkIlls: Java, Javafx, Maven  

### System Administrator

Location: Klyuchevaya Voda  
Time: June 2022 - present  
Responsibilities: Maintenance of cash registers, database administration, software development  
Skills: Microsoft SQL Server, C#, XAML, System Administration, Git  

## Education

University: Tomsk State University of Control Systems and Radioelectronics  
Higher education: Bachelor  

## Languages

Russian - Native   
English - A1
