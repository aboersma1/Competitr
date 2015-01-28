using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TrackFit.Startup))]
namespace TrackFit
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
