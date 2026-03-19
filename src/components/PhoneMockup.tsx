type PhoneMockupProps = {
  className?: string
  variant?: 'feed' | 'chat'
  compact?: boolean
}

export function PhoneMockup({
  className = '',
  variant = 'feed',
  compact = false,
}: PhoneMockupProps) {
  return (
    <div className={`phone-mockup ${compact ? 'phone-mockup--compact' : ''} ${className}`.trim()}>
      <div className="phone-mockup__frame">
        <div className="phone-mockup__camera" />
        <div className="phone-mockup__screen">
          {variant === 'feed' ? (
            <div className="phone-feed">
              <div className="phone-feed__toolbar">
                <button className="phone-feed__menu" type="button" aria-label="Open menu">
                  <span />
                  <span />
                  <span />
                </button>

                <div className="phone-feed__logo" aria-hidden="true">
                  <span className="phone-feed__logo-piece phone-feed__logo-piece--top-left" />
                  <span className="phone-feed__logo-piece phone-feed__logo-piece--top-right" />
                  <span className="phone-feed__logo-piece phone-feed__logo-piece--middle-left" />
                  <span className="phone-feed__logo-piece phone-feed__logo-piece--middle-right" />
                  <span className="phone-feed__logo-piece phone-feed__logo-piece--bottom-left" />
                  <span className="phone-feed__logo-piece phone-feed__logo-piece--bottom-right" />
                </div>

                <div className="phone-feed__profile-thumb" />
              </div>

              <div className="phone-feed__search-row">
                <div className="phone-feed__search">Hey Jason, What&apos;s Shakin&apos;?</div>
                <button className="phone-feed__plus" type="button" aria-label="Create post">
                  +
                </button>
              </div>

              <div className="phone-feed__stories">
                <span className="phone-feed__story phone-feed__story--one" />
                <span className="phone-feed__story phone-feed__story--two" />
                <span className="phone-feed__story phone-feed__story--three" />
                <span className="phone-feed__story phone-feed__story--four" />
                <span className="phone-feed__story phone-feed__story--five" />
              </div>

              <article className="phone-feed__post">
                <div className="phone-feed__post-header">
                  <div className="phone-feed__post-author">
                    <div className="phone-feed__post-avatar" />
                    <div className="phone-feed__post-meta">
                      <strong>
                        Eric W.
                        <span className="phone-feed__verified">✓</span>
                      </strong>
                      <span>MODEL</span>
                    </div>
                  </div>

                  <div className="phone-feed__post-controls">
                    <span className="phone-feed__post-dots">•••</span>
                    <span className="phone-feed__follow">Following</span>
                  </div>
                </div>

                <p className="phone-feed__caption">Strutting into the spotlight. 🚶✨</p>

                <div className="phone-feed__content-row">
                  <div className="phone-feed__hero-photo" />
                  <div className="phone-feed__action-rail">
                    <div className="phone-feed__action">
                      <span>☆</span>
                      <strong>1k</strong>
                    </div>
                    <div className="phone-feed__action">
                      <span>💬</span>
                      <strong>47</strong>
                    </div>
                    <div className="phone-feed__action">
                      <span>⤴</span>
                      <strong>12</strong>
                    </div>
                  </div>
                </div>

                <div className="phone-feed__views">2,300 Views</div>
              </article>

              <div className="phone-feed__teaser">
                <div className="phone-feed__teaser-avatar" />
                <div className="phone-feed__teaser-meta">
                  <strong>
                    Franklin S.
                    <span className="phone-feed__verified">✓</span>
                  </strong>
                </div>
                <span className="phone-feed__post-dots">•••</span>
              </div>

              <div className="phone-feed__nav">
                <span className="phone-feed__nav-icon">⌂</span>
                <span className="phone-feed__nav-icon phone-feed__nav-badge">▷</span>
                <span className="phone-feed__nav-icon phone-feed__nav-badge">◌</span>
                <span className="phone-feed__nav-icon phone-feed__nav-badge">☰</span>
                <span className="phone-feed__nav-icon phone-feed__nav-badge">◖</span>
                <span className="phone-feed__nav-icon phone-feed__nav-icon--accent">+</span>
                <span className="phone-feed__nav-icon phone-feed__nav-badge">⌑</span>
                <span className="phone-feed__nav-icon phone-feed__nav-badge">▦</span>
                <span className="phone-feed__nav-icon phone-feed__nav-badge">☷</span>
                <span className="phone-feed__nav-icon phone-feed__nav-badge">▢</span>
                <span className="phone-feed__nav-icon">⚙</span>
              </div>
            </div>
          ) : (
            <div className="phone-chat">
              <div className="phone-mockup__status">
                <span>9:41</span>
                <span>MyBindle</span>
              </div>

              <div className="phone-chat__profile">
                <span className="phone-chat__avatar" />
                <div>
                  <strong>Community chat</strong>
                  <span>32 members online</span>
                </div>
              </div>

              <div className="phone-chat__bubble phone-chat__bubble--incoming">
                New reels are up. Want the preview link?
              </div>
              <div className="phone-chat__bubble phone-chat__bubble--outgoing">
                Send it through. I will share it with the group.
              </div>
              <div className="phone-chat__bubble phone-chat__bubble--incoming">
                Done. Notifications are already scheduled.
              </div>
            </div>
          )}

          {variant === 'chat' ? (
            <div className="phone-mockup__nav">
              <span />
              <span />
              <span className="phone-mockup__nav-active" />
              <span />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
