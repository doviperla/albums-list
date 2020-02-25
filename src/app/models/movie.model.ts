export class Movie {
    constructor(public id:number = 0,
                public title: string = '',
                public poster ='',
                public year: number = 0,
                public releaseDate:Date = new Date(),
                public genres:string[]){}
  }