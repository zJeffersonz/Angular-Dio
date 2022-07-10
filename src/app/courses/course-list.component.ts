import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

/* decorate que informar para angula que Class abaixo é componente: e adicionar as caracteristicas */@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component .html'
})
export class/*deixa a class publica*/ CourseListComponent implements OnInit {
    
    courses: Course[] =[];
    
    /*metodo que assim q for criado*/ngOnInit(): void{
        this.courses = [    
            {        
                id: 1,
                name: 'Angular, Forms',
                imageUrl: '/assets/image/forms.png',           
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.5,
                releaseDate: 'December, 2, 2022',
                option: '' 
            },
            {
                id: 2,
                name: 'Angular, HTTP',
                imageUrl: "/assets/image/http.png",           
                price: 45.99,
                code: 'XPS-0000',
                duration: 80,
                rating: 4,
                releaseDate: 'December, 12, 2022',
                option: ' '  
            }
        ]   
    }
}