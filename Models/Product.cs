namespace farmaplus.Models
{
    public class Product
    {
        //[Key]
        public int Id {get; set;}
        //[Required,MaxLength(30),MinLength(3)]
        public string Title { get; set; }
        //[Required]
        public float Stock {get; set; }
        //[Required,Range(0, 99999999999999)]
        public double Price {get; set; }
        //[StringLength(200)]
        public string Description {get; set; }
        //[Required,MinLength(5)]
        public string ImageUrl {get; set; }
        public bool deleted {get; set; }
    }
}
