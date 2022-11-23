﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан программой.
//     Исполняемая версия:4.0.30319.42000
//
//     Изменения в этом файле могут привести к неправильной работе и будут потеряны в случае
//     повторной генерации кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.bookDemo
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Книга.
    /// </summary>
    // *** Start programmer edit section *** (Book CustomAttributes)

    // *** End programmer edit section *** (Book CustomAttributes)
    [AutoAltered()]
    [Caption("Книга")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("BookE", new string[] {
            "Name as \'Название\'",
            "Author as \'Автор\'",
            "StringCount as \'Количество страниц\'",
            "URLCover as \'Обложка\'",
            "URLDescription as \'Описание\'",
            "Tags as \'Тэги\'",
            "AverageRating as \'Средний рейтинг\'"})]
    [View("BookL", new string[] {
            "Name as \'Названиеe\'",
            "Author as \'Автор\'",
            "StringCount as \'Количество страниц\'",
            "URLCover as \'Обложка\'",
            "URLDescription as \'Описание\'",
            "Tags as \'Тэги\'",
            "AverageRating as \'Средний рейтинг\'"})]
    public class Book : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private string fAuthor;
        
        private int fStringCount;
        
        private string fURLCover;
        
        private string fURLDescription;
        
        private string fTags;
        
        // *** Start programmer edit section *** (Book CustomMembers)

        // *** End programmer edit section *** (Book CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (Book.Name CustomAttributes)

        // *** End programmer edit section *** (Book.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (Book.Name Get start)

                // *** End programmer edit section *** (Book.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (Book.Name Get end)

                // *** End programmer edit section *** (Book.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.Name Set start)

                // *** End programmer edit section *** (Book.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (Book.Name Set end)

                // *** End programmer edit section *** (Book.Name Set end)
            }
        }
        
        /// <summary>
        /// Author.
        /// </summary>
        // *** Start programmer edit section *** (Book.Author CustomAttributes)

        // *** End programmer edit section *** (Book.Author CustomAttributes)
        [StrLen(255)]
        public virtual string Author
        {
            get
            {
                // *** Start programmer edit section *** (Book.Author Get start)

                // *** End programmer edit section *** (Book.Author Get start)
                string result = this.fAuthor;
                // *** Start programmer edit section *** (Book.Author Get end)

                // *** End programmer edit section *** (Book.Author Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.Author Set start)

                // *** End programmer edit section *** (Book.Author Set start)
                this.fAuthor = value;
                // *** Start programmer edit section *** (Book.Author Set end)

                // *** End programmer edit section *** (Book.Author Set end)
            }
        }
        
        /// <summary>
        /// StringCount.
        /// </summary>
        // *** Start programmer edit section *** (Book.StringCount CustomAttributes)

        // *** End programmer edit section *** (Book.StringCount CustomAttributes)
        public virtual int StringCount
        {
            get
            {
                // *** Start programmer edit section *** (Book.StringCount Get start)

                // *** End programmer edit section *** (Book.StringCount Get start)
                int result = this.fStringCount;
                // *** Start programmer edit section *** (Book.StringCount Get end)

                // *** End programmer edit section *** (Book.StringCount Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.StringCount Set start)

                // *** End programmer edit section *** (Book.StringCount Set start)
                this.fStringCount = value;
                // *** Start programmer edit section *** (Book.StringCount Set end)

                // *** End programmer edit section *** (Book.StringCount Set end)
            }
        }
        
        /// <summary>
        /// URLCover.
        /// </summary>
        // *** Start programmer edit section *** (Book.URLCover CustomAttributes)

        // *** End programmer edit section *** (Book.URLCover CustomAttributes)
        [StrLen(255)]
        public virtual string URLCover
        {
            get
            {
                // *** Start programmer edit section *** (Book.URLCover Get start)

                // *** End programmer edit section *** (Book.URLCover Get start)
                string result = this.fURLCover;
                // *** Start programmer edit section *** (Book.URLCover Get end)

                // *** End programmer edit section *** (Book.URLCover Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.URLCover Set start)

                // *** End programmer edit section *** (Book.URLCover Set start)
                this.fURLCover = value;
                // *** Start programmer edit section *** (Book.URLCover Set end)

                // *** End programmer edit section *** (Book.URLCover Set end)
            }
        }
        
        /// <summary>
        /// URLDescription.
        /// </summary>
        // *** Start programmer edit section *** (Book.URLDescription CustomAttributes)

        // *** End programmer edit section *** (Book.URLDescription CustomAttributes)
        [StrLen(255)]
        public virtual string URLDescription
        {
            get
            {
                // *** Start programmer edit section *** (Book.URLDescription Get start)

                // *** End programmer edit section *** (Book.URLDescription Get start)
                string result = this.fURLDescription;
                // *** Start programmer edit section *** (Book.URLDescription Get end)

                // *** End programmer edit section *** (Book.URLDescription Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.URLDescription Set start)

                // *** End programmer edit section *** (Book.URLDescription Set start)
                this.fURLDescription = value;
                // *** Start programmer edit section *** (Book.URLDescription Set end)

                // *** End programmer edit section *** (Book.URLDescription Set end)
            }
        }
        
        /// <summary>
        /// Tags.
        /// </summary>
        // *** Start programmer edit section *** (Book.Tags CustomAttributes)

        // *** End programmer edit section *** (Book.Tags CustomAttributes)
        [StrLen(255)]
        public virtual string Tags
        {
            get
            {
                // *** Start programmer edit section *** (Book.Tags Get start)

                // *** End programmer edit section *** (Book.Tags Get start)
                string result = this.fTags;
                // *** Start programmer edit section *** (Book.Tags Get end)

                // *** End programmer edit section *** (Book.Tags Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Book.Tags Set start)

                // *** End programmer edit section *** (Book.Tags Set start)
                this.fTags = value;
                // *** Start programmer edit section *** (Book.Tags Set end)

                // *** End programmer edit section *** (Book.Tags Set end)
            }
        }
        
        /// <summary>
        /// AverageRating.
        /// </summary>
        // *** Start programmer edit section *** (Book.AverageRating CustomAttributes)

        // *** End programmer edit section *** (Book.AverageRating CustomAttributes)
        [ICSSoft.STORMNET.NotStored()]
        public virtual double AverageRating
        {
            get
            {
                // *** Start programmer edit section *** (Book.AverageRating Get)
                return 0;
                // *** End programmer edit section *** (Book.AverageRating Get)
            }
            set
            {
                // *** Start programmer edit section *** (Book.AverageRating Set)

                // *** End programmer edit section *** (Book.AverageRating Set)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "BookE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View BookE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("BookE", typeof(IIS.bookDemo.Book));
                }
            }
            
            /// <summary>
            /// "BookL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View BookL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("BookL", typeof(IIS.bookDemo.Book));
                }
            }
        }
    }
}