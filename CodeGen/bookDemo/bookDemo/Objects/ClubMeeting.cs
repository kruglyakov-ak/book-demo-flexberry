//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан программой.
//     Исполняемая версия:4.0.30319.42000
//
//     Изменения в этом файле могут привести к неправильной работе и будут потеряны в случае
//     повторной генерации кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.BookDemo
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Встреча клуба.
    /// </summary>
    // *** Start programmer edit section *** (ClubMeeting CustomAttributes)

    // *** End programmer edit section *** (ClubMeeting CustomAttributes)
    [AutoAltered()]
    [Caption("Встреча клуба")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ClubMeetingE", new string[] {
            "MeetingDate as \'Дата встречи\'"})]
    [AssociatedDetailViewAttribute("ClubMeetingE", "Report", "ReportE", true, "", "Доклад", true, new string[] {
            ""})]
    [View("ClubMeetingL", new string[] {
            "MeetingDate as \'Дата встречи\'"})]
    [AssociatedDetailViewAttribute("ClubMeetingL", "Report", "ReportE", true, "", "Доклад", true, new string[] {
            ""})]
    public class ClubMeeting : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fMeetingDate;
        
        private IIS.BookDemo.DetailArrayOfReport fReport;
        
        // *** Start programmer edit section *** (ClubMeeting CustomMembers)

        // *** End programmer edit section *** (ClubMeeting CustomMembers)

        
        /// <summary>
        /// MeetingDate.
        /// </summary>
        // *** Start programmer edit section *** (ClubMeeting.MeetingDate CustomAttributes)

        // *** End programmer edit section *** (ClubMeeting.MeetingDate CustomAttributes)
        public virtual System.DateTime MeetingDate
        {
            get
            {
                // *** Start programmer edit section *** (ClubMeeting.MeetingDate Get start)

                // *** End programmer edit section *** (ClubMeeting.MeetingDate Get start)
                System.DateTime result = this.fMeetingDate;
                // *** Start programmer edit section *** (ClubMeeting.MeetingDate Get end)

                // *** End programmer edit section *** (ClubMeeting.MeetingDate Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ClubMeeting.MeetingDate Set start)

                // *** End programmer edit section *** (ClubMeeting.MeetingDate Set start)
                this.fMeetingDate = value;
                // *** Start programmer edit section *** (ClubMeeting.MeetingDate Set end)

                // *** End programmer edit section *** (ClubMeeting.MeetingDate Set end)
            }
        }
        
        /// <summary>
        /// Встреча клуба.
        /// </summary>
        // *** Start programmer edit section *** (ClubMeeting.Report CustomAttributes)

        // *** End programmer edit section *** (ClubMeeting.Report CustomAttributes)
        public virtual IIS.BookDemo.DetailArrayOfReport Report
        {
            get
            {
                // *** Start programmer edit section *** (ClubMeeting.Report Get start)

                // *** End programmer edit section *** (ClubMeeting.Report Get start)
                if ((this.fReport == null))
                {
                    this.fReport = new IIS.BookDemo.DetailArrayOfReport(this);
                }
                IIS.BookDemo.DetailArrayOfReport result = this.fReport;
                // *** Start programmer edit section *** (ClubMeeting.Report Get end)

                // *** End programmer edit section *** (ClubMeeting.Report Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ClubMeeting.Report Set start)

                // *** End programmer edit section *** (ClubMeeting.Report Set start)
                this.fReport = value;
                // *** Start programmer edit section *** (ClubMeeting.Report Set end)

                // *** End programmer edit section *** (ClubMeeting.Report Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ClubMeetingE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ClubMeetingE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ClubMeetingE", typeof(IIS.BookDemo.ClubMeeting));
                }
            }
            
            /// <summary>
            /// "ClubMeetingL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ClubMeetingL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ClubMeetingL", typeof(IIS.BookDemo.ClubMeeting));
                }
            }
        }
    }
}
