
# HumanTwin AI - Development Plan

## Project Overview
A comprehensive AI-powered personal twin application with voice cloning, 3D avatars, memory storage, and intelligent decision-making capabilities.

## Phase 1: Foundation & Core Infrastructure
### Task 1.1: Project Setup & Design System ✓
- [x] Create planning document
- [x] Setup design system (index.css with dark theme + neon accents)
- [x] Configure Tailwind with semantic tokens
- [x] Create base layout structure
- [x] Setup routing foundation
**Status:** Complete | **Tokens:** ~8,000

### Task 1.2: Supabase Configuration & Database Schema
**Prerequisite:** User must link Supabase project first
**Execution Strategy:** SQL batch operations for efficiency
**Estimated Tokens:** ~3,500

#### Subtask 1.2.1: Core Database Tables
- [ ] Create users table with role field
- [ ] Create subscriptions table
- [ ] Create uploads table
- [ ] Add RLS policies for users table
- [ ] Add indexes for performance
**SQL Script:** Single transaction with all tables

#### Subtask 1.2.2: Feature-Specific Tables
- [ ] Create memories table
- [ ] Create locations table
- [ ] Create voice_models table
- [ ] Create avatars table
- [ ] Add RLS policies for all tables
- [ ] Add foreign key constraints
**SQL Script:** Single transaction

#### Subtask 1.2.3: Admin & History Tables
- [ ] Create admin_logs table
- [ ] Create history_data table
- [ ] Add RLS policies (admin-only access)
- [ ] Create database functions for role checks
**SQL Script:** Single transaction with functions

#### Subtask 1.2.4: Storage Buckets Setup
- [ ] Create profile_images bucket
- [ ] Create memory_media bucket
- [ ] Create voice_samples bucket
- [ ] Create avatar_models bucket
- [ ] Create documents bucket
- [ ] Create history_images bucket
- [ ] Configure bucket policies (private with signed URLs)
**Note:** Manual setup via Supabase dashboard or SQL

### Task 1.3: Authentication System Implementation
**Estimated Tokens:** ~6,000
**Dependencies:** Task 1.2 complete

#### Subtask 1.3.1: Supabase Client & Auth Context
- [ ] Create Supabase client configuration
- [ ] Build AuthContext provider
- [ ] Implement session management
- [ ] Add auth state persistence
- [ ] Create useAuth hook
**Files:** lib/supabase.ts, contexts/AuthContext.tsx, hooks/useAuth.ts

#### Subtask 1.3.2: Auth UI Components
- [ ] Update LoginPage with Supabase auth
- [ ] Update RegisterPage with Supabase auth
- [ ] Add phone OTP login UI
- [ ] Add OAuth buttons (Google/Apple)
- [ ] Add password reset flow
- [ ] Add email verification UI
**Files:** Update existing auth pages

#### Subtask 1.3.3: Protected Routes & RBAC
- [ ] Create ProtectedRoute component
- [ ] Create RoleGuard component
- [ ] Add role-based navigation
- [ ] Implement feature gating utilities
- [ ] Add subscription check hooks
**Files:** components/auth/ProtectedRoute.tsx, hooks/useRole.ts

### Task 1.4: File Upload System
**Estimated Tokens:** ~4,500
**Dependencies:** Task 1.2 complete

#### Subtask 1.4.1: Upload Utilities
- [ ] Create upload helper functions
- [ ] Implement signed URL generation
- [ ] Add file validation (size, type)
- [ ] Create progress tracking
- [ ] Add error handling
**Files:** lib/upload.ts, hooks/useUpload.ts

#### Subtask 1.4.2: Upload Components
- [ ] ImageUpload component
- [ ] VideoUpload component
- [ ] AudioUpload component
- [ ] DocumentUpload component
- [ ] Multi-file upload component
**Files:** components/upload/*.tsx

#### Subtask 1.4.3: Integration with Features
- [ ] Profile image upload
- [ ] Memory media upload
- [ ] Voice sample upload
- [ ] Avatar photo upload
- [ ] Document upload
**Files:** Update profile, memories, voice pages

## Phase 2: Core Features & Database Integration
### Task 2.1: User Profile System with Database
**Estimated Tokens:** ~5,000
**Dependencies:** Task 1.3, 1.4 complete

#### Subtask 2.1.1: Profile Page & Data Fetching
- [ ] Create ProfilePage component
- [ ] Fetch user data from Supabase
- [ ] Display profile information
- [ ] Show subscription status
- [ ] Add loading/error states
**Files:** pages/ProfilePage.tsx, hooks/useProfile.ts

#### Subtask 2.1.2: Profile Editor
- [ ] Create ProfileEditForm component
- [ ] Update user data in Supabase
- [ ] Profile image upload integration
- [ ] Bio and personal info editing
- [ ] Social visibility settings
**Files:** components/profile/ProfileEditForm.tsx

#### Subtask 2.1.3: Profile Viewing Logic
- [ ] Implement role-based profile viewing
- [ ] Create PublicProfilePage
- [ ] Add privacy controls
- [ ] Show/hide based on subscription
**Files:** pages/PublicProfilePage.tsx

### Task 2.2: Dashboard with Live Data
**Estimated Tokens:** ~4,000
**Dependencies:** Task 1.3 complete

#### Subtask 2.2.1: Dashboard Data Integration
- [ ] Connect stats to database queries
- [ ] Fetch recent memories
- [ ] Get location count
- [ ] Calculate AI conversation stats
- [ ] Real-time subscription status
**Files:** Update DashboardPage.tsx, create hooks/useDashboard.ts

#### Subtask 2.2.2: Quick Upload Integration
- [ ] Add quick upload modal
- [ ] Connect to upload system
- [ ] Save to appropriate tables
- [ ] Update dashboard on upload
**Files:** components/dashboard/QuickUpload.tsx

### Task 2.3: Memory Storage System
**Estimated Tokens:** ~6,000
**Dependencies:** Task 1.4 complete

#### Subtask 2.3.1: Add Memory Interface
- [ ] Create AddMemoryPage
- [ ] Memory form with media upload
- [ ] Location tagging
- [ ] Emotion selection
- [ ] Save to memories table
**Files:** pages/memories/AddMemoryPage.tsx

#### Subtask 2.3.2: Memory Timeline
- [ ] Create MemoriesPage with timeline
- [ ] Fetch memories from database
- [ ] Filter by type/date/emotion
- [ ] Pagination/infinite scroll
- [ ] Memory detail view
**Files:** pages/memories/MemoriesPage.tsx

#### Subtask 2.3.3: Memory Management
- [ ] Edit memory functionality
- [ ] Delete memory with cascade
- [ ] Memory search
- [ ] Export memories
**Files:** components/memories/MemoryCard.tsx

## Phase 3: AI Features & Advanced Modules
### Task 3.1: Voice Cloning Module
**Estimated Tokens:** ~7,000
**Dependencies:** Task 1.4 complete, External API integration required
**Note:** Requires third-party API (ElevenLabs/PlayHT) - API key needed

#### Subtask 3.1.1: Voice Recording & Upload
- [ ] Create VoiceClonePage
- [ ] Audio recording component
- [ ] Voice sample upload
- [ ] Save to voice_samples bucket
- [ ] Create voice_models record
**Files:** pages/voice/VoiceClonePage.tsx, components/voice/VoiceRecorder.tsx

#### Subtask 3.1.2: Voice Training Integration
- [ ] Create Supabase Edge Function for training
- [ ] Integrate with voice cloning API
- [ ] Update voice_models status
- [ ] Store model URL
- [ ] Premium tier gating
**Files:** supabase/functions/train-voice/index.ts

#### Subtask 3.1.3: Text-to-Speech Interface
- [ ] Create TextToSpeechPage
- [ ] Input text component
- [ ] Generate speech with cloned voice
- [ ] Audio playback
- [ ] Download audio
**Files:** pages/voice/TextToSpeechPage.tsx

### Task 3.2: AI Assistant System
**Estimated Tokens:** ~8,000
**Dependencies:** Task 1.3 complete, External AI API required
**Note:** Requires OpenAI/Anthropic API key

#### Subtask 3.2.1: Chat Interface
- [ ] Create AIAssistantPage
- [ ] Chat UI component
- [ ] Message history
- [ ] Context from memories/profile
- [ ] Real-time responses
**Files:** pages/assistant/AIAssistantPage.tsx

#### Subtask 3.2.2: AI Backend Functions
- [ ] Create Edge Function: ai-chat
- [ ] Create Edge Function: ai-voice-response
- [ ] Create Edge Function: ai-analyze-emotion
- [ ] Integrate with user context
- [ ] Store conversation history
**Files:** supabase/functions/ai-*/index.ts

#### Subtask 3.2.3: Voice Chat Integration
- [ ] Voice input component
- [ ] Speech-to-text
- [ ] AI response with cloned voice
- [ ] Audio playback
**Files:** components/assistant/VoiceChat.tsx

#### Subtask 3.2.4: Decision Engine & Mood Analysis
- [ ] Personalized recommendations
- [ ] Mood detection from voice
- [ ] Smart reminders
- [ ] Save insights to database
**Files:** lib/ai-engine.ts

### Task 3.3: 3D Avatar Generator
**Estimated Tokens:** ~6,000
**Dependencies:** Task 1.4 complete, External API required
**Note:** Premium feature, requires Ready Player Me or similar API

#### Subtask 3.3.1: Avatar Creation Interface
- [ ] Create AvatarPage
- [ ] Multi-photo upload (4-6 photos)
- [ ] Submit for generation
- [ ] Save to avatars table
- [ ] Premium tier gating
**Files:** pages/avatar/AvatarPage.tsx

#### Subtask 3.3.2: Avatar Generation Backend
- [ ] Create Edge Function: generate-avatar
- [ ] Integrate with 3D avatar API
- [ ] Store avatar model URL
- [ ] Update status
**Files:** supabase/functions/generate-avatar/index.ts

#### Subtask 3.3.3: Avatar Viewer & Editor
- [ ] 3D model viewer component
- [ ] Animation controls
- [ ] Customization options (hair, clothes)
- [ ] Avatar speech integration
**Files:** components/avatar/AvatarViewer.tsx

### Task 3.4: Location Tracking System
**Estimated Tokens:** ~5,000
**Dependencies:** Task 1.2 complete

#### Subtask 3.4.1: Location Capture
- [ ] Create LocationsPage
- [ ] GPS location capture
- [ ] Save to locations table
- [ ] Address geocoding
- [ ] Permission handling
**Files:** pages/locations/LocationsPage.tsx

#### Subtask 3.4.2: Location Timeline & Map
- [ ] Location history list
- [ ] Map visualization (Mapbox/Leaflet)
- [ ] Favorite places
- [ ] Travel timeline
**Files:** components/locations/LocationMap.tsx

#### Subtask 3.4.3: Location-Based Features
- [ ] Location-based reminders
- [ ] Place recommendations
- [ ] Memory-location linking
**Files:** lib/location-utils.ts

## Phase 4: Advanced Features
### Task 4.1: Location Tracking
- [ ] GPS location capture
- [ ] Location timeline
- [ ] Place history
- [ ] Favorite places
- [ ] Travel map visualization
- [ ] Location-based reminders
- [ ] Server-side storage

### Task 4.2: Virtual Card System
- [ ] Virtual card dashboard
- [ ] Card number generator
- [ ] Balance display
- [ ] Gamified credit score
- [ ] Points & XP system
- [ ] Transaction history
- [ ] Subscription payment integration

### Task 4.3: History Archive System
- [ ] Monuments database
- [ ] Educational institutions
- [ ] Country history
- [ ] Organization histories
- [ ] AI summaries
- [ ] User-contributed locations

## Phase 5: Monetization & Admin
### Task 5.1: Subscription System
- [ ] Subscription tiers (Basic/Pro/Premium)
- [ ] Feature gating logic
- [ ] Stripe integration
- [ ] Subscription management UI
- [ ] Upgrade/downgrade flows
- [ ] Payment history

### Task 5.2: Admin Panel
- [ ] Admin dashboard
- [ ] User management
- [ ] Media moderation
- [ ] Subscription control
- [ ] Content moderation
- [ ] Analytics dashboard
- [ ] Admin logs

## Phase 6: Polish & Optimization
### Task 6.1: UI/UX Enhancement
- [ ] Dark mode refinement
- [ ] Neon glow effects
- [ ] Smooth animations
- [ ] Responsive design
- [ ] Loading states
- [ ] Error handling

### Task 6.2: Performance & Security
- [ ] API optimization
- [ ] Database indexing
- [ ] Row-level security
- [ ] Image optimization
- [ ] Code splitting
- [ ] PWA configuration

## Current Status
**Active Phase:** Phase 1 - Foundation & Core Infrastructure
**Current Task:** 1.1 - Project Setup & Design System
**Completion:** 5%

## Technical Stack
- Frontend: React + TypeScript + Vite
- Routing: React Router v6
- UI: Shadcn/ui + Tailwind CSS
- Backend: Supabase (Database, Auth, Storage, Edge Functions)
- Payments: Stripe
- State: React Query + Context API

## Notes
- Voice cloning will require third-party API integration (ElevenLabs, PlayHT, or similar)
- 3D avatar generation will require AI service integration (Ready Player Me or custom solution)
- Location tracking requires user permission handling
- Payment integration requires Stripe account setup