export interface HomePage{
  data:{
    id: number;
    attributes: {
      Name: string;
      Email: string;
      CellPhone: string;
      Website: string;
      BioSummary: string;
      FullBio: string;
      LinkedIn: string;
      Behance: string;
      Github:string;
      Logo: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
                width: number;
                height: number;
              }
            }
          }
        }
      },
      WebsiteHeroImage: {
        data:{
          attributes: {
            url: string;
            width: number;
            height: number;
          }
        }
      }
    }
  }
}

export interface Skill{
  id: number;
  attributes: {
    SkillName: string;
    SkillScore: string;
    SkillLogo: {
      data: {
        attributes: {
          formats: {
            thumbnail: {
              url: string;
              width: number;
              height: number;
            }
          }
        }
      }
    }
  }
}

export interface Skills{
  data:Skill[];
}

export interface Project{
  id:number;
  attributes: {
    Title: string;
    Summary: string;
    Description: string;
    Weblink: string;
    Trailer: string;
    StartDate: string;
    EndDate: string;
    ClientName: string;
    Category: string;
    Slug: string;
    Image:{
      data: {
        attributes:{
          formats: {
            thumbnail: {
              url:string;
              width: number;
              height: number;
            }
          }
        }
      }
    }
    skills: Skills
  }
}

export interface Projects{
  data:Project[]
}
